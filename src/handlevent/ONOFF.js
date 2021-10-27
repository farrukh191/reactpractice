import react from 'react'

class ONOFF extends react.Component{
    
    constructor(props){
        super(props);
        this.state={
            isToggle:true
        };
        this.onclickChg=this.onclickChg.bind(this);
    }

    onclickChg() {
        this.setState(state =>({
            isToggle: !state.isToggle
        }));
    }

    render(){
        return(
            <div>
                <h3>hy on off toggle class</h3>
                <button onClick={this.onclickChg}>{this.state.isToggle ? 'ON' : 'OFF'}</button>
            </div>
        )
    }
}
export default ONOFF;