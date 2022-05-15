import { Job } from '../../../store/types/job';
import styles from './listTable.module.scss';

interface Props {
  job: Job[];
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
          <tr className={`${styles.tbodyItem} ${index % 2 == 1 ? `${styles.tbodyItemOdd}` : ''}`} key={index}>
            <th className={styles.jobNameItem}>{item.text}</th>
            <th>
              <div
                className={`${styles.priorityItem} ${
                  item.priority == 'Urgent'
                    ? `${styles.priorityItemUrgent}`
                    : item.priority == 'Important'
                    ? `${styles.priorityItemImportant}`
                    : item.priority == 'Regularly'
                    ? `${styles.priorityItemRegularly}`
                    : null
                }`}
              >
                {item.priority}
              </div>
            </th>
            <th>{}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
