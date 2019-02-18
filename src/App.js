import React, { useState } from 'react';
import { Row, Col, Icon } from 'antd';
import FormikForm from './FormikForm';
import counselorPersonal, { counselorCredentials, counselorVerification } from './fields';
import './App.css';



const App = () => {


  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    setSubmitted(true);
  };

  return (
    <Row style={{padding: '40px'}}>
      {!submitted ?
        (
          <div>
            <Col span={6} offset={9} >
              <h1>Forms</h1>
              <p>Snippet of code of React with the following features:</p>
              <ul>
                <li>create react app</li>
                <li>forms generated using fields from different arrays</li>
                <li>Ant Design UI Kit</li>
                <li>make use of the hooks API</li>
                <li>ES6+ features</li>
                <li>prop types</li>
                <li>heroku deploy</li>
                <li>github repository</li>
              </ul>
              <FormikForm
                initialValues
                fields={counselorPersonal.concat(counselorCredentials, counselorVerification)}
                handleSubmit={(values, actions) => handleSubmit(values, actions)}
              />
            </Col>
          </div>
        )
        : (
          <div style={{ textAlign: 'center' }}>
            <h1><Icon type="check-circle" style={{ color: 'green', fontSize: '60px' }} /></h1>
            <h1>You have completed your profile </h1>
            <p>We will evaluate your profile and get back to you within the next 3 business days</p>
          </div>
        )
      }
    </Row>
  );
}

export default App