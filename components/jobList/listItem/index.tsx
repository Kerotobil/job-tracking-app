import { Priority } from '../../../store/types/job';
import { Actions } from './actions';
import styles from './listItem.module.scss';

interface Props {
  index: number;
  jobName: string;
  priority: Priority;
}

export const ListItem = (props: Props) => {
  return (
    <tr className={`${styles.tbodyItem} ${props.index % 2 == 1 ? `${styles.tbodyItemOdd}` : ''}`}>
      <th className={styles.jobNameItem}>{props.jobName}</th>
      <th>
        <div
          className={`${styles.priorityItem} ${
            props.priority == 'Urgent'
              ? `${styles.priorityItemUrgent}`
              : props.priority == 'Important'
              ? `${styles.priorityItemImportant}`
              : props.priority == 'Regularly'
              ? `${styles.priorityItemRegularly}`
              : null
          }`}
        >
          {props.priority}
        </div>
      </th>
      <th>
        <Actions />
      </th>
    </tr>
  );
};
