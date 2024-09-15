import styled from "styled-components";

export const StyledIncomeExpensesContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  > div {
    flex: 1;
    text-align: center;

    &:first-of-type {
      border-right: 1px solid #dedede;
    }
  }
`;

export const StyledIncomeExpensesTitle = styled.div`
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
`;

export const StyledIncomeExpensesValue = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: ${({ color }) => color};
`