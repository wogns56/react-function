import React,{ Component } from 'react';

class Signin extends Component {
    render(){
      console.log('Signin render');
      return(
        <article>
          <h2>이름 : {this.props.title}</h2>
          <h4>정보 : {this.props.desc}</h4>
          <h4>지역 : {this.props.address}</h4>
          <h4>아이디 : {this.props.Id}</h4>
          <h4>비밀번호 : {this.props.pw}</h4>
        </article>
      );
    }
  }
  
  export default Signin;