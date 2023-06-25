import {
  ActionButton,
  GroupAction,
  NotData,
  TableBody,
  TableCell,
  TableCellStatus,
  TableContainer,
  TableHead,
  TableRow,
} from "./TableNetwork.style";
import { CiCircleRemove, CiRead } from "react-icons/ci";
import { TableProps } from "./TableNetwork.models";

const TableNetwork: React.FC<TableProps> = ({
  data,
  columns,
  removeRow,
  openModal,
}) => {

  if (data?.length === 0) {
    return <NotData> Non ci sono dati</NotData>;
  }
  return (
    <TableContainer>
      <TableHead>
        <tr>
          {columns.map((column, index) => (
            <TableRow key={index}>{column}</TableRow>
          ))}
        </tr>
      </TableHead>
            {data?.length === 0 && <div> Non ci sono dati</div>}
      <TableBody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.country}</TableCell>
            <TableCell>{row.state}</TableCell>
            <TableCell>{row.city}</TableCell>
            <TableCellStatus status={row.status}>{row.status}</TableCellStatus>
            <TableCell>{row.approverUserId}</TableCell>
            <GroupAction>
              <ActionButton>
                <CiRead size={30} onClick={() => openModal(row.id)} />
              </ActionButton>
              <ActionButton>
                <CiCircleRemove size={30} onClick={() => removeRow(row.id)} />
              </ActionButton>
            </GroupAction>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default TableNetwork;
