import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Input } from "../UI/Input";

export const ExpensesForm = ({ onClick, addExpenseHandler }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState();
  const [inputDate, setInputDate] = useState(null);

  function getInputValue(e) {
    setInputText(e.target.value);
  }
  function getDateInput(e) {
    setInputDate(e.target.value);
  }
  function getNumberInput(e) {
    if (inputNumber <= 0) {
      return 0;
    }
    setInputNumber(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const product = {
      id: new Date().toString(),
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
    };
    addExpenseHandler(product);

    setInputDate("");
    setInputNumber("");
    setInputText("");
  }

  return (
    <form onSubmit={submitHandler} className="header">
      <ConteinerInput>
        <div style={{ display: "flex" }}>
          <Input
            type="text"
            placeholder="Zagolovok"
            children="Zagolovok"
            value={inputText}
            onChange={getInputValue}
          />
          <Input
            type="date"
            placeholder="data"
            children="Data"
            value={inputDate}
            onChange={getDateInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",

          }}
        >
          <Input
            type="number"
            children="Kolichestvo"
            placeholder="0"
            value={inputNumber}
            onChange={getNumberInput}
          />
        </div>
      </ConteinerInput>

      <ConteinerBtn>
        <Button marginRight="20px" onClick={onClick}>
          Отмена
        </Button>
        <Button marginRight="12px">Добавть расход</Button>
      </ConteinerBtn>
    </form>
  );
};

const ConteinerInput=styled.div`
display: flex;
  margin-left: 30px;
  justify-content:center;
  align-items:center;
`
const ConteinerBtn=styled.div`
margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
`