//MEDIUM
// import React from 'react';

// const basicinfo = ({ person }) => {
//   return (
//     <div>
//       <p>Name: {person.name}</p>
//       <p>Number: {person.number}</p>
//       <p>Date of Birth: {person.dateOfBirth}</p>
//     </div>
//   );
// };

// export default basicinfo;

//HARD

import React from 'react';

const basicinfo = ({ person }) => {
  return (
    <div style={{marginBottom: '20px', padding:'10px', border:'1px solid #fff', borderRadius: '5px'} }>
      <p>Name: {person.name}</p>
      <p>Number: {person.number}</p>
      <p>Date of Birth: {person.dateOfBirth}</p>
    </div>
  );
};

export default basicinfo;


