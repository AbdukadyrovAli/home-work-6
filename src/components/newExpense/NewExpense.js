import Button from "../UI/Button";
import { ExpensesForm } from "./ExpensesForm";
import { useState } from "react";

export const NewExpense = ({ addExpenseHandler }) => {
  const [state, setState] = useState(false);

  function openAndCloseExpensesFormHandler() {
    setState((prev) => !prev);
  }
  return (
    <div
      style={{
        backgroundColor: "#AD9BE9",
        width: "50%",
        padding: "30px",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          addExpenseHandler={addExpenseHandler}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новые расходы
        </Button>
      )}
    </div>
  );
};
