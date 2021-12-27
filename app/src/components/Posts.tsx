/* eslint-disable react/prop-types */
import React from 'react';
import { ReposList } from '.';

const Posts = ({
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

export default Posts;
