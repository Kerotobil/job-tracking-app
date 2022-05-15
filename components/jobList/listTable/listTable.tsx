import { Job } from '../../../store/types/job';
import { ListItem } from '../listItem';
import styles from './listTable.module.scss';

interface Props {
  job: Job[];
  editEvent: (item: Job) => void;
  deleteEvent: (item: Job) => void;
}

export const ListTable = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.jobNameTitle}> {'Job Name'} </th>
          <th className={styles.priotityTitle}> {'Priority'} </th>
          <th className={styles.ActionTitle}> {'Actions'} </th>
        </tr>
      </thead>
      <tbody>
        {props.job.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            job={item}
            editEvent={(e) => props.editEvent(e)}
            deleteEvent={(e) => props.deleteEvent(e)}
          />
        ))}
      </tbody>
    </table>
  );
};
