import { IIModalNetworkProps } from "./ModalNetwork.model";
import {
  CLoseModalButton,
  ModalContent,
  ModalNetworkStyled,
  Row,
} from "./ModalNetwork.style";
import { CiCircleRemove } from "react-icons/ci";


const ModalNetwork = ({ netWork, onClose }: IIModalNetworkProps) => {
  return (
    <ModalNetworkStyled>
      <ModalContent>
        <Row>
          <div>name:</div>
          <div>{netWork?.name}</div>
        </Row>

        <Row>
          <div>country:</div>
          <div>{netWork?.country}</div>
        </Row>
        <Row>
          <div>state:</div>
          <div>{netWork?.state}</div>
        </Row>
        <Row>
          <div>status:</div>
          <div>{netWork?.status}</div>
        </Row>
        <CLoseModalButton onClick={() => onClose()}>
          <CiCircleRemove size={30} />
        </CLoseModalButton>
      </ModalContent>
    </ModalNetworkStyled>
  );
};

export default ModalNetwork;
