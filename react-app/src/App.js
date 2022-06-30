// // import logo from './logo.svg';
// import './App.css';
// import React,{ Component } from 'react';
// import TOC from './components/TOC';
// import Subject from './components/Subject';
// import ReadContent from './components/ReadContent';
// import Control from './components/Control';
// import CreateContent from './components/CreateContent';
// import UpdateContent from './components/UpdateContent';

// class App extends Component {
// // function App() {
//   constructor(props){
//     super(props);
//     this.max_content_id = 3;
//     this.state = {
//       mode:'read',
//       selected_content_id:2,
//       subject:{title:'WEB',sub:'world wide web!'},
//       welcome:{title:'Welcome',desc:'Hello, React'},
//       contents:[
//         {id:1,title:'HTML',desc:'HTML is for imformation'},
//         {id:2,title:'CSS',desc:'CSS is for design'},
//         {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
//       ]
//     }
//   }
//   // getReadContent start
//   getReadContent(){
//     let i = 0;
//       while(i < this.state.contents.length) {
//         let data = this.state.contents[i];
//         if(data.id === this.state.selected_content_id) {
//           return data;
//         }
//         i = i + 1;
//       }
//   }

//   // getReadContent end
  
//   // getContent start
//   getContent(){
//     let _title, _desc = null, _article;
//     if(this.state.mode === 'welcome') {
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//       _article = <ReadContent title={_title} desc={_desc}></ReadContent>
//     }else if(this.state.mode === 'read') {
//       // _title = this.state.contents[0].title;
//       // _desc = this.state.contents[0].desc;
//       let _content = this.getReadContent();

//       _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
//     }else if(this.state.mode === 'create') {
//       _article = <CreateContent onSubmit={function(_title,_desc){
//         this.max_content_id = this.max_content_id + 1;
//         // this.state.contents.push({
//         //   id:this.max_content_id,title:_title,desc:_desc
//         // });
//         let _contents = this.state.contents.concat({
//           id:this.max_content_id,title:_title,desc:_desc
//         });

//         this.setState({
//           // contents : this.state.contents
//           contents : _contents
//         })
//       }.bind(this)}></CreateContent>
//     }else if(this.state.mode === 'update') {
//       _article = <UpdateContent onSubmit={function(_title,_desc){
//         this.max_content_id = this.max_content_id + 1;

//         let _contents = this.state.contents.concat({
//           id:this.max_content_id,title:_title,desc:_desc
//         });

//         this.setState({
//           contents : _contents
//         })
//       }.bind(this)}></UpdateContent>
//     }else if(this.state.mode === 'update') {
//       let _content = this.getReadContent();
//       _article = <UpdateContent data = {_content}></UpdateContent>
//     }
//     return _article;
//   }

//   // getContent end


//   render(){
//     console.log('App render');
    
//     return (
//       <div>
//         <Subject title={this.state.subject.title}
//                   sub={this.state.subject.sub}
//                   onChangePage={function(){
//                     this.setState({mode:'welcome'});
//                   }.bind(this)}>
//         </Subject>  {/*  <Subject /> */}
//         {/* <header>
//           <h1><a href='/' onClick={function(e){
//             e.preventDefault();
//             this.setState({mode:'welcome'});
//           }.bind(this)}>{this.state.subject.title}</a></h1>
//           {this.state.subject.sub}
//         </header> */}

//         {/* <TOC data={this.state.contents}></TOC>     <TOC /> */}
//         <TOC data={this.state.contents}
//                     onOpenAlert={function(id){
//                       this.setState({
//                         mode:'read',
//                         selected_content_id:Number(id)
//                       });
//                     }.bind(this)}>
//         </TOC>
//         {/* <ul>
//           <li><a href="/create">create</a></li>
//           <li><a href="/update">update</a></li>
//           <li><input type="button" value="delete"></input></li>
//         </ul> */}
//         <Control onChangeMode={function(_mode){
//           this.setState({
//             mode:_mode
//           });
//         }.bind(this)}></Control>
//         {this.getContent()}
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
// ------------------------------------------------------------
import './App.css';
import React,{ Component } from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB',sub:'World Wid Web'},
      welcome:{title:'Welcome',desc:'Hello, React!!'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for imformation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  //getReadContent start

  getReadContent(){
    let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i = i + 1;
      }
  }

  //getReadContent end

  //getContent start
  
  getContent(){
    let _title, _desc = null, _article;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id:this.max_content_id,title:_title,desc:_desc}
        // );

        // let _contents = this.state.contents.concat(
        //      {id:this.max_content_id,title:_title,desc:_desc}
        //  );

        let _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id,title:_title,desc:_desc});

        this.setState({
          //contents : this.state.contents
          mode:'read',
          contents : _contents,
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article = <UpdateContent data = {_content}
                    onSubmit={function(_id,_title,_desc){
                      let _contents = Array.from(this.state.contents);
                      let i = 0;
                      while(i < _contents.length) {
                        if(_contents[i].id == _id) {
                          _contents[i] = {id:_id,title:_title,desc:_desc};
                          break;
                        }
                        i = i + 1;
                      }
                      this.setState({
                        contents:_contents,
                        mode:'read'
                      })
                    }.bind(this)}>
                  </UpdateContent>
    }

    return _article;
  }

  //getContent end

  render(){
    console.log('App render');

    return (
      <div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(){
            this.setState({mode:'welcome'}) ;
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.contents}
          onChangePage={function(id){
            this.setState(
              {
                mode:'read',
                selected_content_id:Number(id)
              }
            ) ;
          }.bind(this)}
        >
        </TOC>
        <Control onChangeMode={function(_mode){
            this.setState({
              mode:_mode
            });
          }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;