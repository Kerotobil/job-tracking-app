import type { NextPage } from 'next';
import { useState } from 'react';
import { CreateJob } from '../components/createJob';
import { JobList } from '../components/jobList';
import { useSelector } from 'react-redux';
import { AppState } from '../store';

const Home: NextPage = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const jobList = useSelector((state: AppState) => state.job);

  return (
    <div>
      <CreateJob />
      <JobList jobList={jobList.item} />
    </div>
  );
};

export default Home;
