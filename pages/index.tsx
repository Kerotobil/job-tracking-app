import type { NextPage } from 'next'
import { CreateJob } from '../components/createJob'
import { JobList } from '../components/jobList'

const Home: NextPage = () => {
  return (
    <div >
      <CreateJob />
      <JobList />
    </div>
  )
}

export default Home
