/* eslint-disable react/prop-types */
import React from 'react';
import useFetch from '../hooks/useFetch';

const DataProvider = ({ renderContent }) => {
  const { data, isLoading } = useFetch(
    'https://api.github.com/users/xreyaf/repos'
  );
  return <>{renderContent(data, isLoading)}</>;
};

export default DataProvider;
