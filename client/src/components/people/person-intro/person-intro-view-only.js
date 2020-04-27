import React from 'react';
import Checkbox from '../../common/form/checkbox';

export default function PersonInformationViewOnly({ person }) {
  console.log('PersonInformationViewOnly person', person)
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-3 text-center">
          <label htmlFor="intro-email-sent">Intro Email Sent </label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 text-center">
          <Checkbox
            input={{
              name: "introEmailSent",
              id: "intro-email-sent",
              checked: `${person.introEmailSent}`,
              disabled: true
            }}
            disabled={true}
          />
        </div>
      </div>
      <br/>
    </div>
  )
}
