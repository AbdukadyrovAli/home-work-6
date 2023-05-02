import { ExpensesCard } from "./ExpensesCard";
import  {ExpenseFilter}  from "./ExpenseFilter";
import { useState } from "react";
import { ExpensesChart } from "./Char";
import styled from "styled-components";
export const Expenses = (props) => {
  const { data, setNewProduct } = props;
  const [selectedYear, setSelectededYear] = useState("2023");
  function getSelectValue(event) {
    setSelectededYear(event.target.value);

  }

  const filteredYear = data.filter((el) => {
    return new Date(el.date).getFullYear().toString() === selectedYear;
  });

 const descending=()=>{
  const res=filteredYear.sort((a,b)=>{
    return new Date(a.date) - new Date(b.date)
  })
  setNewProduct(res)
 }

 const ascending=()=>{
  const resed=filteredYear.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date)
  })
  setNewProduct(resed)
 }

  return (
    <ConteinerExpense>
      <ExpenseFilter
       getValue={getSelectValue}
      ascending={ascending}
      descending={descending}
       />
       <ExpensesChart filtredExpenses={filteredYear}/>
      {filteredYear.map((el) => {
        return <ExpensesCard key={el.id} el={el} />;
      })}
    </ConteinerExpense>
  );
};

const ConteinerExpense=styled.div`
width: "790px";
        padding-top: "30px";
        padding-bottom:'30px';
        padding-right:'20px' ;
        padding-left:'20px' ;
        margin-top: "20px";
        background-color: "#1F1F1F";
        display: "flex";
        flex-direction: "column";
        align-items: "center";
        border-radius: "20px";
`
