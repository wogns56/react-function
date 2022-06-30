import React,{ Component } from 'react';

class Main extends Component {
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;

        while(i < data.length) {
            lists.push(<li key={data[i].id}>
                        <a href={"/content/" + data[i].id}
                        data-id = {data[i].id}
                            onClick = {function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}>
                        {data[i].title}</a></li>)
                    i = i + 1;
        }
        return(
            <article>
                <br></br>
                <section class="content">
                        asdf
                </section>
                <aside class="right-side">
                    <input type="text" class="id" size="10"></input>
                </aside>

                {lists}
            </article>
        );
    }
}

export default Main;