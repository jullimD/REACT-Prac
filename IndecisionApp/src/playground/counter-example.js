class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);
        
        if (!isNaN(count)){
            this.setState(() => ({count}));

        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }


    // componentDidUpdate(prevProps,prevState){
    //     if (prevState.options.length !== this.state.options.length){
    //         const json = JSON.stringify(this.state.options);
    //         localStorage.setItem('options', json);
    //     }

    // }

    handleAddOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
        console.log("Add One");
    }
    
    handleMinusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            };
        });
        console.log("Minus One");
    }
    

    handleReset(){
        this.setState(() =>{
            return {
                count: 0
            };
        });
        console.log("Reset");
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>

        )

    }
}


const appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
root.render(<Counter/>);