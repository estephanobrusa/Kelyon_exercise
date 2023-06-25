import styled from 'styled-components';
import { ItableCellPropsStyle } from './TableNetwork.models';

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    padding-bottom: 100px ;

    @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    }
    
`;

export const TableHead = styled.thead`
  background-color: #18456C;
  border-color: #18456C;
  color: white;
`;

export const TableRow = styled.th`
  padding: 20px;
  text-transform: uppercase;
  font-size: 12px;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableCell = styled.td`
  padding: 20px;
  text-transform: uppercase;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
`;

export const TableCellStatus = styled.td<ItableCellPropsStyle>`
  padding: 20px;
  text-transform: uppercase;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  background-color: ${props => props.status === 'active' ? '#87D3EA' : '#F5E769'};
`;

export const GroupAction = styled.td`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
gap: 10px;
cursor: pointer;
`;

export const ActionButton = styled.div`
align-self: center
`;

export const NotData = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
background-color: #F5F5F5;
`;

