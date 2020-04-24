import React from 'react';

export default function PersonInformationViewOnly({ person }) {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-3 text-center">
          <label htmlFor="intro-email-sent">Intro Email Sent </label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 text-center">
          <input
            name="introEmailSent"
            id="intro-email-sent"
            type="checkbox"
            defaultChecked={person.introEmailSent}
            disabled
          />
        </div>
      </div>
      <br/>
    </div>
  )
}
