import React from 'react';
import { Button } from 'reactstrap'

// CMM-Can it have multiple exports?

// exports Input, TextArea, and FormBtn components

// export default function Input(props) {
//     return (
//       <div className="form-group">
//         <input className="form-control" {...props} />
//       </div>
//     );
// };
  
// export default function TextArea(props) {
//     return (
//       <div className="form-group">
//         <textarea className="form-control" rows="20" {...props} />
//       </div>
//     );
// };
  
export default function FormBtn() {
    return (
      <Button color="primary" size="lg" block>
      </Button>
    );
};