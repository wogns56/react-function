// import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
// function App() {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB',sub:'world wide web!'},
      welcome:{title:'Welcome',desc:'Hello, React'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for imformation'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    console.log('App render');
    let _title, _desc = null, _article;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read') {
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;

          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({
        //   id:this.max_content_id,title:_title,desc:_desc
        // });
        let _contents = this.state.contents.concat({
          id:this.max_content_id,title:_title,desc:_desc
        });

        this.setState({
          // contents : this.state.contents
          contents : _contents
        })
      }.bind(this)}></CreateContent>
    }
    return (
      <div>
        <Subject title={this.state.subject.title}
                  sub={this.state.subject.sub}
                  onChangePage={function(){
                    this.setState({mode:'welcome'});
                  }.bind(this)}>
        </Subject>  {/*  <Subject /> */}
        {/* <header>
          <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.setState({mode:'welcome'});
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        {/* <TOC data={this.state.contents}></TOC>     <TOC /> */}
        <TOC data={this.state.contents}
                    onOpenAlert={function(id){
                      this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                      });
                    }.bind(this)}>
        </TOC>
        {/* <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="delete"></input></li>
        </ul> */}
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}
// }

export default App;
// ----------------------------------------------------------

// import './App.css';
// import React,{ Component } from 'react';
// import Title from './components/Title';
// import Search from './components/Search';
// import Main from './components/Main';
// import Content from './components/Content';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mode:'read',
//       selected_content_id:1,
//       contents:[
//         {id:1, title:'여기 아무것도 없어요'},
//         {id:2, title:'아무것도 없다니까요. 나가요'}
//       ]
//     }
//   }
//     render(){
//       let _title;
//       if(this.state.mode === 'read') {
//         let i = 0;
//         while(i < this.state.contents.length) {
//           let data = this.state.contents[i];
//           if(data.id === this.state.selected_content_id) {
//             _title = data.title;

//             break;
//           }
//           i = i + 1;
//         }
//       }
//       return(
//         <div>
//           <Title></Title>
//           <Search></Search>
//           <Main data={this.state.contents}
//                       onChangePage={function(id){
//                         this.setState({
//                           mode:'read',
//                           selected_content_id:Number(id)
//                         });
//                       }.bind(this)}>
//           </Main>
//           <Content title={_title}></Content>
//         </div>
//       );
//     }
// }

// export default App;