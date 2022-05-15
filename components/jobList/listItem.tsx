import { Priority } from '../../store/types/job';

interface Props {
  jobName: string;
  priority: Priority;
}

export const ListItem = (props: Props) => {
  return (
    <tr>
      <td>{props.jobName}</td>
      <td>
        <div>
          <p>{props.priority}</p>
        </div>
      </td>
    </tr>
  );
};
