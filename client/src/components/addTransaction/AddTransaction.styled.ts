import styled from "styled-components"

export const StyledAddTransactionTitle = styled.h2`
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
  font-size: unset;
`

export const StyledAddTransactionLabel = styled.label`
  display: inline-block;
  margin: 10px 0;
`

export const StyledAddTransactionInput = styled.input`
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`

export const StyledErrorText = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const StyledTransactionTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const StyledTransactionTypeButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) => ($isActive ? "#28a745" : "#f8f9fa")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#000")};
  border: 2px solid ${({ $isActive }) => ($isActive ? "#28a745" : "#ddd")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  width: 48%;
  
  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#218838" : "#e2e6ea")};
  }

  .symbol {
    font-size: 20px;
    margin-right: 10px;
    font-weight: bold;
  }
`;

export const StyledAddTransactionButton = styled.button`
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
