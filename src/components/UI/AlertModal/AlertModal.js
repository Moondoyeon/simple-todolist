import styled, { keyframes } from "styled-components";
import { flexBox, positionCenterX } from "../../../styles/mixins";
import { BiInfoCircle } from "react-icons/bi";
const AlertModal = ({ message }) => {
  return (
    <ModalContainer>
      <ProgressBar />
      <BiInfoCircle />
      <Text>{message}</Text>
    </ModalContainer>
  );
};
export default AlertModal;

const ModalShow = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ModalContainer = styled.div`
  ${positionCenterX()}
  top: 2%;
  ${flexBox()}
  width: 400px;
  height: 50px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.darkGrayColor};
  background-color: white;
  box-shadow: 0 0 5px ${({ theme }) => theme.mediumGrayColor};
  overflow: hidden;
  z-index: 2;
  animation: ${ModalShow} 3s linear;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.mainColor};
  font-size: 18px;
  font-weight: 600;
  margin-left: 5px;
`;

const ProgressBarAnimation = keyframes`
  from {
    transform: translateX(0);
  } 
  to {
    transform: translateX(-100%)
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 3px solid ${({ theme }) => theme.mintColor};
  width: 100%;
  height: 150px;
  animation: ${ProgressBarAnimation} 3s linear;
`;
