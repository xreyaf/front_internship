import { ReposList } from '.';

const Repos = ({
  data,
  isLoading
}: {
  data: Array<any>;
  isLoading: boolean;
}) => {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data && <ReposList repos={data} />}

    </div>
  );
};

export default Repos;
