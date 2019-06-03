import * as React from 'react'
import { techs as techList } from '../../static/data/techs'

interface JobProps {
  jobTitle: string
  jobId: string
  companyName: string
  jobDates: { from: string; to: string }
  jobDuties: string
  techStack: string[]
}

export const Job = (props: JobProps) => {
  const { jobTitle, jobId, companyName, jobDates, jobDuties, techStack } = props
  return (
    <section className={'job'}>
      <div className={'job-title'}>
        <h2>{jobTitle}</h2>
        <span
          className={'open-details-button'}
          onClick={e => console.log('click', e)}
        >
          details
        </span>
      </div>
      <div className={'job-details'}>
        <div className={'company-logo'} id={jobId} title={companyName} />
        <div className={'job-dates'}>
          {jobDates.to}
          <br />
          -
          <br />
          {jobDates.from}
        </div>
        <div className={'job-duties'}>
          <p>{jobDuties}</p>
          <div className={'tech-stack'}>
            <TechStach stack={techStack} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechStackProps {
  stack: string[]
}
const TechStach = (props: TechStackProps) => (
  <ul>
    {props.stack.map(tech => {
      return (
        <li key={techList[tech].title}>
          <a href={techList[tech].url} title={techList[tech].title}>
            <div className={`lang-list-icon ${techList[tech].className}`} />
          </a>
        </li>
      )
    })}
  </ul>
)
