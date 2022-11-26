import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0px;
  padding: 5px;
  border-radius: 5px;
  textarea {
    height: 30px;
    width: 100%;
  }
  :hover {
    background-color: #f3ece1;
  }
`;
export const TodoWrapper = styled.div`
  display: flex;
  width: 100%;
  .checkbox {
    margin-right: 10px;
    cursor: pointer;
    width: 20px;
  }
  .completed {
    text-decoration: line-through;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  button {
    margin-left: 3px;
  }
`;
export const TodoContent = styled.div``;
