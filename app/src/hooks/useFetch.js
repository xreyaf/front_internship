import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(url);
    setData(response.data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    loadData();
  }, [url, loadData]);

  return { data, isLoading };
};

export default useFetch;
