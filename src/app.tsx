import * as React from 'react'
import './static/css/main.css'
import { Job } from './pods/jobs/job-component'
import { jobList } from './static/data/jobs'
import { Job as JobType } from './pods/jobs/model'

export const App = () => {
  const [jobs, setJobs] = React.useState([])
  React.useEffect(() => {
    setJobs(jobList)
  }, [])

  return (
    <section id={'container'}>
      <section id={'content'}>
        <h1>Óscar Garcia Masiá</h1>
        <p>
          Hi, I'm Óscar
          <br />
          I'm a software engineer from Barcelona.
        </p>
        <h2>Experience:</h2>
        <div id={'cv'}>
          {jobs.map((job: JobType) => (
            <Job {...job} key={job.jobId} />
          ))}
        </div>
      </section>
    </section>
  )
}
