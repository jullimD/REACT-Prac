import React from "react";
import Option from "./Option";

const Options = (props) =>(
        <div>
        <div className="widget-header">
        <h3 className="widget_title">Your Options</h3>
        <button onClick={props.handleDeleteOptions}
        className="button button--link"
        >Remove All</button>
        </div>
        {props.option.length===0 && <p className="widget-message">Please add an option to get started.</p>}
        {props.option.map((element, index) => 
            <Option key={element} optionText = {element} count={index+1 }handleDeleteOption = {props.handleDeleteOption}/>
        )
        
        }
        </div>
    );

export default Options;
// class Options extends React.Component{

//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {this.props.option.map((element) => 
//                 <Option key={element} optionText = {element}/>
//             )}
//             </div>
//         )
//     }
// };
