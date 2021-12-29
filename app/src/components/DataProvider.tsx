import useFetch from '../hooks/useFetch';

const URL: string = 'https://api.github.com/users/xreyaf/repos';

const DataProvider = ({
  renderContent
}: {
  renderContent: (data: Array<any>, isLoading: boolean) => JSX.Element;
}) => {
  const { data, isLoading } = useFetch(URL);
  return <>{renderContent(data, isLoading)}</>;
};

export default DataProvider;
