/* eslint-disable no-undef */
import React from 'react';
import useFetch from '../hooks/useFetch';

const DataProvider = ({
  renderContent
}: {
  renderContent: (data: Array<any>, isLoading: boolean) => JSX.Element;
}) => {
  const { data, isLoading } = useFetch(
    'https://api.github.com/users/xreyaf/repos'
  );
  return <>{renderContent(data, isLoading)}</>;
};

export default DataProvider;
