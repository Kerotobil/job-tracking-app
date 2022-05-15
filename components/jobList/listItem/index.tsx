import { Job } from '../../../store/types/job';
import { Actions } from './actions';
import styles from './listItem.module.scss';

interface Props {
  index: number;
  job: Job;
  editEvent: (item: Job) => void;
  deleteEvent: (item: Job) => void;
}

export const ListItem = (props: Props) => {
  return (
    <tr className={`${styles.tbodyItem} ${props.index % 2 == 1 ? `${styles.tbodyItemOdd}` : ''}`}>
      <th className={styles.jobNameItem}>{props.job.text}</th>
      <th>
        <div
          className={`${styles.priorityItem} ${
            props.job.priority == 'Urgent'
              ? `${styles.priorityItemUrgent}`
              : props.job.priority == 'Important'
              ? `${styles.priorityItemImportant}`
              : props.job.priority == 'Regularly'
              ? `${styles.priorityItemRegularly}`
              : null
          }`}
        >
          {props.job.priority}
        </div>
      </th>
      <th>
        <Actions editEvent={() => props.editEvent(props.job)} deleteEvent={() => props.deleteEvent(props.job)} />
      </th>
    </tr>
  );
};
