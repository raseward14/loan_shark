import React from 'react';
import {
  Button
} from 'reactstrap'

// exports Input, TextArea, and FormBtn components

export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }
  
  export function TextArea(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="20" {...props} />
      </div>
    );
  }
  
  export function FormBtn(props) {
    return (
      <Button color="primary" size="lg" block>
      </Button>
    );
  }