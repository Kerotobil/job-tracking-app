import { useState } from 'react';
import { Priority } from '../../store/types/job';
import { ListTable } from './listTable/listTable';
import { TextFilter } from './textFilter';
import styles from './jobList.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

export const JobList = () => {
  const [textFilter, setTextFilter] = useState<string>();
  const [sortPriority, setSortPriority] = useState<Priority>();
  const jobList = useSelector((state: AppState) => state.job);
  return (
    <div className={styles.pageContainer}>
      <ListTable job={jobList.item} />
    </div>
  );
};
