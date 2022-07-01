import React,{ Component } from 'react';

class CreateInfo extends Component {
    render(){
      console.log('CreateInfo render');
      return(
        <article>
            <h2>회원 가입</h2>
            <form action="/create_process"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value,
                            e.target.address.value,
                            e.target.Id.value,
                            e.target.pw.value);
                    }.bind(this)}>
                <p><input type="text" name="title" placeholder="회원 이름"></input></p>
                <p><textarea name='desc' placeholder='회원 정보'></textarea></p>
                <p><input type='text' name='address' placeholder='회원 주소'></input></p>
                <p><input type='text' name='Id' placeholder='회원 아이디'></input></p>
                <p><input type='text' name='pw' placeholder='회원 비밀번호'></input></p>
                <p><input type='submit'></input></p>
            </form>
        </article>
      );
    }
  }
  
  export default CreateInfo;