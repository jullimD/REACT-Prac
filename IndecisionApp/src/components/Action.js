import React from "react";


const Action = (props) => (
        <div>
            <button className="big-button"
             onClick={props.handlePick} disabled={!props.hasOptions}>
            
            What to do?
            </button>
        </div>
        );



export default Action;
// class Action extends React.Component{
    
//     render(){
//         return (
//         <div>
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
            
//             What to do?
//             </button>
//         </div>
//         )
//     };
// }

