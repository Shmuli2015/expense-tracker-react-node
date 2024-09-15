import styled from "styled-components"

export const StyledTransactionListDeleteBtn = styled.button`
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:focus {
    outline: 0;
  }
`

export const StyledTransactionListItem = styled.li<{ $isIncome: boolean }>`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  border-right: 5px solid ${({ $isIncome }) => ($isIncome ? "#2ecc71" : "#c0392b")};

  &:hover ${StyledTransactionListDeleteBtn} {
    opacity: 1;
  }
`