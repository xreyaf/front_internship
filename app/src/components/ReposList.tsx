/* eslint-disable react/prefer-exact-props */
/* eslint-disable react/prop-types */
import React from 'react';

const ReposList = ({ repos }: { repos: any }) => {
  return (
    <p style={{ whiteSpace: 'pre-line' }}>
      {repos
        .map(
          (rep: {
            name: any;
            created_at: string | number | Date;
            updated_at: string | number | Date;
            description: any;
          }) =>
            `Имя репозитория: ${rep.name}, создан: ${new Date(
              rep.created_at
            ).toLocaleDateString()}, последнее обновление: ${new Date(
              rep.updated_at
            ).toLocaleDateString()}. Описание: ${rep.description} `
        )
        .join('\n')}
    </p>
  );
};

export default ReposList;
