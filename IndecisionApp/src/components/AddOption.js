
import React from "react";



export default class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOp = this.handleAddOp.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOp(e){
        e.preventDefault();
        console.log("test");
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOp(option);
        this.setState(()=>({error: error}));
        
        if (!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return (
            <div>
            {this.state.error && <p className="add-option_error">{this.state.error}</p>}
            <form className='add-option' onSubmit={this.handleAddOp}>
                <input className="add-option__input" type="text" name="option"></input>
                <button className="button">Submit Item</button>
            </form>
            
            </div>
        )
    }
};