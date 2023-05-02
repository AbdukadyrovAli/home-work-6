import styled from "styled-components";
export const ChartBar = ({ currentPrice, label }) => {
  const maximumPrise = 2000;
  const percent = (100 * currentPrice) / maximumPrise;

  return (
    <CharBar>
      <CharBar>
        <CharBarInner>
    <CharBarFill style={{ height: `${percent}%` }}> </CharBarFill>
        </CharBarInner>
        <CharBarLable>
        </CharBarLable>
        {label}
      </CharBar>
    </CharBar>
  );
};

const CharBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
`;

const CharBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color:violet;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const CharBarFill = styled.div`
  background-color: red;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const CharBarLable = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
