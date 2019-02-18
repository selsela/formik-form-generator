import React from 'react';
import { AntInput, AntSelect, AntFile } from "./AntFields";
import { Form } from 'antd';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';


const FormikForm = ({ formTitle, handleSubmit, fields, submitLabel, initialValues }) => {
  return (
    <>
      <h1>{formTitle}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({ handleSubmit, isSubmitting, status  }) => (
          <Form onSubmit={handleSubmit}>
            {fields.map((field) => {
              let component = AntInput;
              if (field.type === 'file') {
                component = AntFile;
              } else if (field.type === 'select') {
                component = AntSelect
              }
              return <Field
                key={field.name}
                component={component}
                selectOptions={field.select}
                name={field.name}
                type={field.type}
                label={field.label}
                validate={field.validate}
                hasFeedback
              />
            })}
            {status && status.msg && <div>{status.msg}</div>}
            <button className="ant-btn ant-btn-primary" type="submit" disabled={isSubmitting}>
              {submitLabel || 'Submit'}
            </button>
          </Form>
        )}
      />
    </>
  )
}

FormikForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  submitLabel: PropTypes.string,
}

export default FormikForm;