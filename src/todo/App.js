import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);
        this.clickchange=this.clickchange.bind(this);
        this.clicksubmit=this.clicksubmit.bind(this);

        this.state={
            items:[],
            text:''
        }  
    }

    clickchange(event){
        this.setState({
            text:event.target.value
        });
    }

    clicksubmit(event){
        event.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }

        const newItem={
            text:this.state.text,
            id:Date.now
        }
        this.setState(state =>({
            items:state.items.concat(newItem),
            text:''
        }));


    }
    render(){

        return(
            <div>
            <h1>welcome to todo application</h1>
            {this.state.text}
            <form onSubmit={this.clicksubmit}>
                <input value={this.state.text} onChange={this.clickchange} />
                {/* <input type='submit' value='submit' /> */}
                <button>
                  Add # {this.state.items.length + 1}
                </button>
            </form>
            
            <TodoList items={this.state.items} />
            </div>
        );
    }
}

class TodoList extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.items.map(item=>(
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;