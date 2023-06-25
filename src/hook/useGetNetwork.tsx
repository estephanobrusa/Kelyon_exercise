import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getNetwork } from '../services/getNetwork';
import { INetwork } from '../services/getNetwork.models';

interface NetworkResponse {
    data: INetwork[] 
    isLoading: boolean;
    isError: boolean;
}
const useGetNetwork = (): NetworkResponse => {
  const [data, setData] = useState<INetwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const response =await getNetwork();
        setData(response);
        toast.success("Dati caricati con successo");
      } catch (error) {
        setError(true);
        toast.error("errore nel caricamento dei dati");
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);


  return { data, isLoading, isError: error};
};

export default useGetNetwork
