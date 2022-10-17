import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 13px;
    color: #464646;
    margin-bottom: 3px;
  }
  input {
    height: 35px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    text-indent: 5px;
    font-size: 14px;
  }
  input:focus {
    outline: 2px solid #95d1cc;
    border: none;
  }
`;
const Message = styled.p`
  margin-top: 3px;
  font-size: 12px;
  text-indent: 3px;
  color: ${(props) => (props.msgProp === ">" ? "white" : "#ff7f7f")};
`;
const DefaultInput = ({
  type,
  label,
  value,
  name,
  message,
  placeholder,
  onChange,
}) => {
  return (
    <Container>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={type === "password" ? "off" : ""}
      />
      <Message msgProp={message}>{message}</Message>
    </Container>
  );
};
export default DefaultInput;
