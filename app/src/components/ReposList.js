/* eslint-disable react/prop-types */
import React from 'react';

export const ReposList = ({ repos }) => {
  return (
    <p style={{ whiteSpace: 'pre-line' }}>
      {repos
        .map(
          (rep) =>
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
