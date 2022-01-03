import { IRepos } from '../interfaces';

const ReposList = ({ repos }: { repos: Array<any> }) => {
  return (
    <p style={{ whiteSpace: 'pre-line' }}>
      {repos
        .map(
          (rep: IRepos) =>
            `Имя репозитория: ${rep.name}, создан: ${new Date(
              rep.createdAt
            ).toLocaleDateString()}, последнее обновление: ${new Date(
              rep.updatedAt
            ).toLocaleDateString()}. Описание: ${rep.description} `
        )
        .join('\n')}
    </p>
  );
};

export default ReposList;
