import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/newExpense/NewExpense";
import { useState } from "react";

const produckData = [
  {
    title: "alma",
    price: 120,
    date: "11.11.21",
    id: "1",
  },
  {
    title: "banan",
    price: 380,
    date: "02.07.21",
    id: "2",
  },

  {
    title: "grusha",
    price: 280,
    date: "05.06.21",
    id: "3",
  },
];
function App() {
  const [newProduct, setNewProduct] = useState(produckData);

  function addExpenseHandler(data) {
    setNewProduct([...newProduct, data]);
  }

  function deleteExpense(id) {
    const newData = newProduct.filter((el) => el.id !== id);
    setNewProduct(newData);
  }
  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses
        data={newProduct}
        setNewProduct={setNewProduct}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default App;
