import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    width: 15%;
    height: 35px;
  }
`;

export const Textarea = styled.textarea`
  height: 35px;
  width: 85%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  padding-top: 8px;
  text-indent: 5px;
  margin-right: 5px;
  :focus {
    outline: 0.5px solid #95d1cc;
  }
`;
