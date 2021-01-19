import React from 'react';

export const Alert = ({text}) => (
    <div className="alert alert-danger" role="alert">
      <p>{text}</p>
    </div>
)