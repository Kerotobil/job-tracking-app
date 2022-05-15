import type { NextPage } from 'next';
import { useState } from 'react';
import { CreateJob } from '../components/createJob';
import { JobList } from '../components/jobList';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { Job } from '../store/types/job';
import { EditModal } from '../components/modals/edit';
import styles from '../styles/index.module.scss';
import { updateJob } from '../store/actions/updateJob';
import { deleteJob } from '../store/actions/deleteJob';
import { DeleteModal } from '../components/modals/delete';
import Head from 'next/head';

const Home: NextPage = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [actionItem, setActionItem] = useState<Job>();

  const jobList = useSelector((state: AppState) => state.job);

  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Job Tracking App</title>
      </Head>
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
            saveEvent={(e) => {
              dispatch(updateJob({ item: { type: 'UPDATE_JOB', payload: { text: actionItem.text, priority: e } } }));
              setEditModal(false);
            }}
          />
        </div>
      ) : null}
      {deleteModal && actionItem != null ? (
        <div className={styles.modal}>
          <DeleteModal
            job={actionItem}
            cancelEvent={() => {
              setDeleteModal(false);
            }}
            saveEvent={() => {
              actionItem && dispatch(deleteJob({ item: { type: 'DELETE_JOB', payload: actionItem } }));
              setDeleteModal(false);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
