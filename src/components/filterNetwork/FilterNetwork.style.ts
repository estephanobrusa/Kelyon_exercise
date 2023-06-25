import { styled } from "styled-components";
import { IIerrorFilter } from "./FilterNetwork.model";

export const FilterContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

export const FormNetWork = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const GroupFilters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ContainerFilter = styled.div`
  width: 200px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding-bottom: 30px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 20px;
  justify-content: flex-end;
`;

export const TextInput = styled.input<IIerrorFilter>`
  padding: 10px;
  border: ${(props) =>
    props.$error === true ? "1px solid #B33A3A" : "1px solid #ccc"}; 
  border-radius: 5px;
  outline: none;
  border
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const ErrorLabel = styled.span`
  font-size: 12px;
  color: #b33a3a;
`;

export const SelectDropdown = styled.select`
  position: relative;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

export const SelectDropdownOptions = styled.div`
  position: absolute;
`;


export const ButtonStyle = styled.button`
    padding: 10px;
    color: #18456C;
    border: #18456C solid 1px;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    &:hover {
        border: none;
    }
`;
