import { IRepos } from '../interfaces';

const ReposList = ({ repos }: { repos: Array<any> }) => {
  return (
    <p style={{ whiteSpace: 'pre-line' }}>
      {repos
        .map(
          (rep: IRepos) =>
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
