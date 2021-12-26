/* eslint-disable react/prop-types */
import React from 'react';
import { ReposList } from '.';

const Posts = ({ data, isLoading }: { data: any; isLoading: any }) => {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data && <ReposList repos={data} />}
    </div>
  );
};

export default Posts;
