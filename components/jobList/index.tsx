import { useState } from 'react';
import { Job, JobState, Priority } from '../../store/types/job';
import { ListTable } from './listTable/listTable';
import { TextFilter } from './textFilter';
import styles from './jobList.module.scss';

interface Props {
  jobList: Job[];
  editEvent: (item: Job) => void;
  deleteEvent: (item: Job) => void;
}
export const JobList = (props: Props) => {
  const [textFilter, setTextFilter] = useState<string>();
  const [sortPriority, setSortPriority] = useState<Priority>();
  return (
    <div className={styles.pageContainer}>
      <ListTable job={props.jobList} editEvent={(e) => props.editEvent(e)} deleteEvent={(e) => props.deleteEvent(e)} />
    </div>
  );
};
