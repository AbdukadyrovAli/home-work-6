import React from "react";
import styled from "styled-components";
import './ExpenseFilter.css'

export const ExpenseFilter = (props) => {
  return (
    <div className="div" >
      <label style={{ fontSize: "24px", color: "#fff", fontWeight: "600" }}>
        Фильтровать по году
      </label>

      <BtnStyle onClick={props.descending}>По возрастанию</BtnStyle>
      <BtnStyle onClick={props.ascending}>По убыванию</BtnStyle>
      <StyledSelect value={props.selected} onChange={props.getValue}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </StyledSelect>
    </div>
  );
};



const StyledSelect = styled.select`
  height: 35px;
  font-size: 20px;
  font-weight: 600;
  width: 160px;
  text-align: center;
  border: none;
  border-radius: 10px;
`;

const BtnStyle = styled.button`
  background-color: #242222;
  border: 1px solid #ffffff;
  color: "#fff";
  padding: 9px;

  :hover {
    background-color: #fff;
    color: #242222;
  }
`;
