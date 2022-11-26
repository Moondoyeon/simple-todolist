import styled from "styled-components";
const CustomButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border: none;
  width: ${({ btnWidth }) => (btnWidth === "short" ? "40px" : "300px")};
  border-radius: 3px;
  font-size: 14px;
  height: 30px;
  white-space: nowrap;
  background-color: ${({ btnType, disabled }) =>
    disabled
      ? "#B3B0B0"
      : btnType === "red"
      ? "#FF7F7F"
      : btnType === "mint"
      ? "#95d1cc"
      : " white"};
  color: ${({ btnType }) => (btnType === "default" ? "black" : "white")};
  :hover {
    background-color: ${({ disabled, btnType }) =>
      disabled ? "" : btnType === "red" ? "#FFB0B0" : btnType === "mint" ? "#B4E0DD" : ""};
    color: ${({ btnType }) => (btnType === "default" ? "#7F7F7F" : "white")};
  }
`;
const DefaultButton = ({ text, type, onClick, disabled, width }) => {
  const btnType = ["red", "mint"].includes(type) ? type : "default";
  const btnWidth = ["short"].includes(width) ? width : "default";
  return (
    <CustomButton btnType={btnType} btnWidth={btnWidth} onClick={onClick} disabled={disabled}>
      {text}
    </CustomButton>
  );
};
export default DefaultButton;
