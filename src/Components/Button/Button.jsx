import React, {Component} from 'react';

class Button extends Component {
    state = {
        value:this.props.value,
    }
    nameChange=()=>{
        this.setState({value:+this.state.value+1})
    }
    render() {
        return (
            <button onClick={this.nameChange}>
                change + 1
            </button>
        );
    }
}

export default Button;