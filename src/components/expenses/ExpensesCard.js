import styled from "styled-components";

export const ExpensesCard = ({ el }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });

  const dateYear = new Date(el.date).getFullYear().toString();

  const dateDay = new Date(el.date).getDate().toString();
  return (
    <Contein>
      <LeftSide>
        <PDate>
          <span>{dateMonth}</span>
          <span>{+dateYear}</span>
          <Content>{+dateDay}</Content>
        </PDate>
        <Title>{el.title}</Title>
      </LeftSide>
      <Price>{el.price} $</Price>
    </Contein>
  );
};

const Contein = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  align-items: center;
  background-color: #4b4b4b;
  border-radius: 15px;
  width: 96%;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PDate = styled.div`
  text-align: center;
  color: #ffffff;
  box-sizing: border-box;
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const Content = styled.span`
  font-size: 23px;
  font-weight: 700;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

const Price = styled.p`
  width: 90px;
  background-color: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;
