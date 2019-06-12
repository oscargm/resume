import * as React from 'react'
import '../../static/css/modal.css'

interface Props {
  jobId: string
  jobTitle: string
  companyName: string
  open: boolean
  setOpenModal: (open) => void
}

export const Modal = (props: Props) => {
  return (
    <div
      id={`modal-${props.jobId}`}
      className={props.open ? 'modal-wrapper is-visible' : 'modal-wrapper'}
    >
      <div className="modal-background">
        <div className="modal">
          <h2>{`${props.jobTitle} at ${props.companyName}`}</h2>
          <p>
            As a member of an Agile department working with Safe methodology, we
            work within iterations where the following stages are repeated:
          </p>
          <div className="stages">
            <section className="refinements">
              <h4>Refinements</h4>
              <div className="arrow-right" />
              <div className="task-list">
                <ul>
                  <li>Backlog items refinement</li>
                  <li>Analyze business impact</li>
                  <li>Analyze technical debt</li>
                  <li>User stories definition</li>
                  <li>Define features to cover with Acceptance Tests</li>
                  <li>Sprint planning</li>
                </ul>
              </div>
            </section>
            <section className="development">
              <h4>Development</h4>
              <div className="arrow-right" />
              <div className="task-list">
                <ul>
                  <li>Daily meeting to synchroniza</li>
                  <li>Development of new features</li>
                  <li>Development of tests</li>
                  <li>Refinement of following sprints</li>
                  <li>Track SonarQube issues</li>
                  <li>Pull requests revisions</li>
                  <li>BugFixing</li>
                </ul>
              </div>
            </section>
            <section className="regression">
              <h4>Regression</h4>
              <div className="task-list">
                <ul>
                  <li>Stakeholders Demo</li>
                  <li>Team retrospective</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="action-buttons">
            <button
              onClick={() => props.setOpenModal(false)}
              className="closeButton"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
