import type { NextPage } from 'next';
import { useState } from 'react';
import { CreateJob } from '../components/createJob';
import { JobList } from '../components/jobList';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Job } from '../store/types/job';
import { EditModal } from '../components/modals/edit';
import styles from '../styles/index.module.scss';

const Home: NextPage = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [actionItem, setActionItem] = useState<Job>();

  const jobList = useSelector((state: AppState) => state.job);

  return (
    <div>
      <div className={`${styles.page} ${editModal || deleteModal ? styles.deneme : ''}`}>
        <CreateJob />
        <JobList
          jobList={jobList.item}
          editEvent={(event) => {
            setActionItem(event);
            setEditModal(true);
          }}
          deleteEvent={(event) => {
            setActionItem(event);
            setDeleteModal(true);
          }}
        />
      </div>
      {editModal && actionItem != null ? (
        <div className={styles.modal}>
          <EditModal
            job={actionItem}
            cancelEvent={() => {
              setEditModal(false);
            }}
            saveEvent={() => {}}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
