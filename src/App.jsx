import React, {Component} from "react";
import './style.scss'

class App extends Component{
    render(){
        return(
            <div style={{color:'red'}}>
                Hello World
                <span className={'box'}>I am Jack.</span>
            </div>
        )
    }
}

export default App;
