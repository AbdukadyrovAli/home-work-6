import { ExpensesCard } from "./ExpensesCard";
import  {ExpenseFilter}  from "./ExpenseFilter";
import { useState } from "react";
import { ExpensesChart } from "./Char";
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
    <div
      style={{
        width: "790px",
        padding: "30px 20px",
        marginTop: "20px",
        backgroundColor: "#1F1F1F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <ExpenseFilter
       getValue={getSelectValue}
      ascending={ascending}
      descending={descending}
       />
       <ExpensesChart filtredExpenses={filteredYear}/>
      {filteredYear.map((el) => {
        return <ExpensesCard key={el.id} el={el} />;
      })}
    </div>
  );
};
