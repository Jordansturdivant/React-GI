
// import './App.css';
// import BasicInfo from './basicinfo'
// import React from 'react';
// import React, { Component } from 'react';


// //VERY EASY
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Name: Jordan sturdivant</p>
//         <p>Number: 789-654-9087</p>
//         <p>Date of Birth: November 1, 1999</p>
//       </div>
//     );
//   }
// }

// export default App;




//EASY
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Name: Jordan sturdivant</p>
// //         <p>Number: 789-654-9087</p>
// //         <p>Date of Birth: November 1, 1999</p>
//       </div>
//     );
//   }
// }

// export default App;



//MEDIUM
// App.js
// import React, { Component } from 'react';
// import basicinfo from './basicinfo';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Jordan Sturdivant',
//         number: '789-654-9087',
//         dateOfBirth: 'November 1, 1999'
//       }
//     };
//   }

//   render() {
//     return (
//       <div>
//         <BasicInfo person={this.state.person} />
//       </div>
//     );
//   }
// }

// export default App;




//HARD
import React, { Component } from 'react';
import BasicInfo from './basicinfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: 'Jordan Strudivant', number: '789-654-9087', dateOfBirth: 'November 1, 1999'},
        { name: 'Lane smith', number: '987-654-3210', dateOfBirth: 'February 3, 1990' },
        { name: 'Bobbi Lena', number: '456-786-0123', dateOfBirth: 'March 5, 1993' }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;

