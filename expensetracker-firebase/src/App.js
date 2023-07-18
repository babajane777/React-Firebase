import { useState, useReducer, useEffect } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import { doc, collection, addDoc, setDoc, getDocs, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseinit";

const reducer = (state, action) => {
  const { payload } = action;
  // add cases to set retrived expenses to state here
  switch (action.type) {
    case "GET_EXPENSES": {
      return {
        expenses: payload.expenses
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  // create function to get expenses from firestore here
  // const getData = async () => {
  //   // change this to retrive expenses from firestore in realtime
  //   const snapshot = await getDocs(collection(db, "expenses"));
  //   const expenses = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data()
  //   }));

  //   dispatch({ type: "GET_EXPENSES", payload: { expenses } });
  //   toast.success("Expenses retrived successfully.");
  // };

  // use appropriate hook to get the expenses when app mounts
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "expenses"), (snapShot) => {
      const expenses = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      // console.log(blogs);
      dispatch({ type: "GET_EXPENSES", payload: { expenses } });
      toast.success("Expenses retrived successfully.");
    })
  }, []);


  const addExpense = async (expense) => {
    const expenseRef = collection(db, "expenses");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } }
    });
    toast.success("Expense added successfully.");
  };

  // const deleteExpense = (id) => {
  const deleteExpense = async (id) => {
    // delete expense from firestore here
    const docRef = doc(db, "expenses", id);
    await deleteDoc(docRef);

    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
    toast.success("Expense deleted successfully.");
  };

//   dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
// };

const resetExpenseToUpdate = () => {
  setExpenseToUpdate(null);
};

const updateExpense = async (expense) => {
  const expensePos = state.expenses
    .map(function (exp) {
      return exp.id;
    })
    .indexOf(expense.id);

  if (expensePos === -1) {
    return false;
  }

  const expenseRef = doc(db, "expenses", expense.id);
  await setDoc(expenseRef, expense);

  dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
  toast.success("Expense updated successfully.");
};

return (
  <>
    <ToastContainer />
    <h2 className="mainHeading">Expense Tracker</h2>
    <div className="App">
      <ExpenseForm
        addExpense={addExpense}
        expenseToUpdate={expenseToUpdate}
        updateExpense={updateExpense}
        resetExpenseToUpdate={resetExpenseToUpdate}
      />
      <div className="expenseContainer">
        <ExpenseInfo expenses={state.expenses} />
        <ExpenseList
          expenses={state.expenses}
          deleteExpense={deleteExpense}
          changeExpenseToUpdate={setExpenseToUpdate}
        />
      </div>
    </div>
  </>
);
}

export default App;