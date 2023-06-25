import { useEffect, useState } from "react";
import FilterNetwork from "../../components/filterNetwork/FilterNetwork";
import useGetNetwork from "../../hook/useGetNetwork";
import PrincipalLayout from "../../layout/PrincipalLayout";
import { INetwork } from "../../services/getNetwork.models";
import { createPortal } from "react-dom";
import { useLoginStore } from "../../store/Store";
import { useNavigate } from "react-router-dom";
import { columns, Iform } from "./Dashboard.model";
import ModalNetwork from "../../components/modals/ModalNetwork";
import TableNetwork from "../../components/tableNetwork/TableNetwork";



const Dashboard = () => {
 
  const { user, isLoggedIn } = useLoginStore((state) => state);
  const navigate = useNavigate();
  const { isLoading, data } = useGetNetwork();
  const [filteredData, setFilteredData] = useState<INetwork[]>([]);
  const [selected, setSelected] = useState<INetwork>()
  const [showModal, setShowModal] = useState(false);
  const [filter] = useState<Iform>({
    name: '',
    country: '',
    state: '',
    status: '',
    city: ''
  });

  useEffect(() => {
    if (!user || !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, user]);

  const filterData = (values: Iform) => {
    const newData =
      data?.filter((row) => {
        if (
          values?.name !== "" &&
          !row.name.toUpperCase().includes(values.name?.toUpperCase() || "")
        )
          return false;
        if (
          values?.city !== "" &&
          !row.city.toUpperCase().includes(values.city?.toUpperCase() || "")
        )
          return false;
        if (values?.country !== "" && row.country !== values?.country)
          return false;
        if (values?.state !== "" && row.state !== values?.state) return false;
        if (values?.status !== "" && row.status !== values?.status)
          return false;

        return true;
      }) || [];
    setFilteredData(newData);
  };

  const removeRow = (id: string) => {
    const newData = [...filteredData];
    const rowIndex = filteredData.findIndex((row) => row.id === id);
    newData.splice(rowIndex, 1);
    setFilteredData(newData);
  };

  const openModal = (id: string) => {
    const rowIndex = filteredData.findIndex((row) => row.id === id);
    if (rowIndex != -1) {
      const selected = filteredData[rowIndex];
      setSelected(selected);
      setShowModal(true);
    }
  }


  useEffect(() => {
    if (!isLoading && data) setFilteredData(data);
  }, [isLoading]);
  
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <PrincipalLayout>
        <FilterNetwork filter={filter} onSearch={filterData} />
        <TableNetwork
          data={filteredData}
          columns={columns}
          removeRow={removeRow}
          openModal={openModal}
        />
      </PrincipalLayout>
      {showModal && selected &&
        createPortal(
          <ModalNetwork netWork={selected} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default Dashboard;
