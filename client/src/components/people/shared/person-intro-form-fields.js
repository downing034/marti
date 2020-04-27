import React from 'react'
import { Field } from 'redux-form';
import Checkbox from '../../common/form/checkbox';

export default function PersonIntroFormFields() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 text-center">
          <label htmlFor="intro-email-sent">Intro Email Sent </label>
        </div>
      </div>

      <div className="row">


        <div className="col-md-3 text-center">
          <Field
            name="introEmailSent"
            id="intro-email-sent"
            component={Checkbox}
            type="checkbox"
            className="checkbox-custom"
          />
        </div>
      </div>
      <br/>

    </div>
  )
}


