
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOp = this.handleAddOp.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: ['One','Two','Three']
        };

    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
                this.setState(() => ({options}))
            }
        } catch (e){

        }
    }

    componentDidUpdate(){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){

    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }
    handleDeleteOptions(){
        this.setState(() =>({options: []}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) =>({
            options: prevState.options.filter((option) =>
                optionToRemove !== option
            )
        }));

    };

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = state.options[randomNum];
        alert(option);

    };

    handleAddOp(option){

        if (!option){
            return 'Enter valud value'

        }
        else if (this.state.options.indexOf(option) >-1) {
            return 'This option already exists';
        }

        this.setState((prevState)=> ({options: prevState.options.concat([option]) }));


    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'
       
        
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action 
            hasOptions= {this.state.options.length >0}
            handlePick = {this.handlePick}/>
            <Options 
                option={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
            <AddOptions
                handleAddOp = {this.handleAddOp}
            />
    // </div>
        )
    }
}


IndecisionApp.defaultProps = {
    options: ['one','two']


}

class Header extends React.Component{

    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>)
    };
}


// const Action = (props) => {
//     return (
//         <div>
//             <button onClick={props.handlePick} disabled={!props.hasOptions}>
            
//             What to do?
//             </button>
//         </div>
//         )

// }

class Action extends React.Component{
    
    render(){
        return (
        <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
            
            What to do?
            </button>
        </div>
        )
    };
}


const Options = (props) =>{
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.option.length===0 && <p>Please add an option to get started.</p>}
        {props.option.map((element) => 
            <Option key={element} optionText = {element}handleDeleteOption = {props.handleDeleteOption}/>
        )
        
        }
        </div>
    )
};

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

const Option = (props) =>{
    return (
        <div>
        Option: {props.optionText}
        <button onClick={(e) =>{
            props.handleDeleteOption(props.optionText);
        }}>Remove</button>
        </div>
    )
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//             Option: {this.props.optionText}
//             </div>
//         )
//     }
// }


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOp = this.handleAddOp.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOp(e){
        e.preventDefault();
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
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOp}>
                <input type="text" name="option"></input>
                <button>Submit</button>
            </form>
            
            </div>
        )
    }
};

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
        </div>

    );
};

//Optioons -> Options component here
// Add options
const appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
root.render(<IndecisionApp/>);