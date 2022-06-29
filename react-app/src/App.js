// import logo from './logo.svg';
// import './App.css';
// import React,{ Component } from 'react';
// import TOC from './components/TOC';
// import Subject from './components/Subject';
// import Content from './components/Content';

// class App extends Component {
// // function App() {
//   render(){
//     return (
//       <div>
//         <Subject title="WEB" sub="world wide web!"></Subject>  {/* <Subject /> */}
//         <TOC></TOC>     {/* <TOC /> */}
//         <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>   {/* Content /> */}
//       </div>
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React
//       //     </a>
//       //   </header>
//       // </div>
//     );
//   }
// }
// // }

// export default App;
// ----------------------------------------------------------

import './App.css';
import React,{ Component } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Main from './components/Main';

class App extends Component {
    render(){
      return(
        <div>
          <Title></Title>
          <Search></Search>
          <Main></Main>
        </div>
      );
    }
}

export default App;