import styled from "styled-components";
const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  padding: ${(props) => (props.btnWidth === "short" ? "5px" : "10px")};
  width: ${(props) => (props.btnWidth === "short" ? "40px" : "100%")};
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  background-color: ${(props) =>
    props.btnType === "red"
      ? "#FF7F7F"
      : props.btnType === "mint"
      ? "#95d1cc"
      : " white"};
  color: ${(props) => (props.btnType === "default" ? "black" : "white")};
`;
const DefaultButton = ({ text, type, onClick, disabled, width }) => {
  const btnType = ["red", "mint"].includes(type) ? type : "default";
  const btnWidth = ["short"].includes(width) ? width : "default";
  return (
    <CustomButton
      btnType={btnType}
      btnWidth={btnWidth}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </CustomButton>
  );
};
export default DefaultButton;
