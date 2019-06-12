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
          <p>Hear me roar.</p>
          <span>{props.jobId}</span>
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
