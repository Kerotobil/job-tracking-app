import { useEffect, useState } from 'react';
import { Job } from '../../store/types/job';
import { ListTable } from './listTable/listTable';
import { TextFilter } from './filter';
import styles from './jobList.module.scss';
import { sortBy } from 'lodash';

interface Props {
  jobList: Job[];
  editEvent: (item: Job) => void;
  deleteEvent: (item: Job) => void;
}
export const JobList = (props: Props) => {
  const [textFilter, setTextFilter] = useState<string>();
  const [priorityFilter, setPriorityFilter] = useState<string>();

  const sort = (array: Job[]) => {
    array = sortBy(array, (item) => {
      let rank = {
        Urgent: 1,
        Important: 2,
        Regularly: 3,
      };
      return rank[item.priority];
    });
    return array;
  };
  console.log(props.jobList.length);
  return (
    <div key={props.jobList.length} className={styles.pageContainer}>
      <h1 className={styles.title}>Job List</h1>
      <TextFilter
        textFilter={(e) => {
          setTextFilter(e);
        }}
        priorityFilter={(e) => {
          setPriorityFilter(e);
        }}
      />
      <ListTable
        job={sort(
          props.jobList.filter((item) =>
            !!textFilter
              ? item.text.includes(textFilter)
              : true && !!priorityFilter
              ? item.priority == priorityFilter
              : true
          )
        )}
        editEvent={(e) => props.editEvent(e)}
        deleteEvent={(e) => props.deleteEvent(e)}
      />
    </div>
  );
};
