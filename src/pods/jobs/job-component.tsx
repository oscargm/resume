import * as React from 'react'
import { ReactNode } from 'react'
import { techs as techList } from '../../static/data/techs'
import { Modal } from '../modal/modal.component'

interface JobProps {
  children?: ReactNode
  jobTitle: string
  jobId: string
  companyName: string
  jobDates: { from: string; to: string }
  jobDuties: string
  techStack: string[]
}

export const Job = (props: JobProps) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const { jobTitle, jobId, companyName, jobDates, jobDuties, techStack } = props
  const handleKeys = e => {
    e.keyCode === 27 && modalOpen && setModalOpen(!modalOpen)
  }
  window.addEventListener('keydown', handleKeys)
  return (
    <>
      <div className={'job-wrapper'}>
        <div className={'job'} id={`job-${jobId}`}>
          <div className={'job-front'}>
            <section className={'job-title'}>
              <h2>{jobTitle}</h2>
              <button
                className={'open-details-button'}
                onClick={() => !modalOpen && setModalOpen(!modalOpen)}
              >
                Details
              </button>
            </section>
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
                <TechStach stack={techStack} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        jobId={jobId}
        companyName={companyName}
        jobTitle={jobTitle}
        open={modalOpen}
        setOpenModal={setModalOpen}
      />
    </>
  )
}

interface TechStackProps {
  stack: string[]
}
const TechStach = (props: TechStackProps) => (
  <div className={'tech-stack'}>
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
  </div>
)
