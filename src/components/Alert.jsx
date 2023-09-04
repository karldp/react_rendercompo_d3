import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Alerts = ({ alerta }) => {
  const { text, color, state } = alerta;

  return (
    <div className='col-12 col-lg-4'>
      {state && (
        <Alert variant={color}>
          {text}
        </Alert>
      )}
    </div>
  );
};

export default Alerts;