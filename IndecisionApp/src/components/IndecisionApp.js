import React from "react";
import AddOptions from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOp = this.handleAddOp.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            options: ['One','Two','Three'],
            selectedOption: undefined
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

    handleCloseModal(){
        this.setState(()=>({
            selectedOption: undefined

        }))

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
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}))

    };

    handleAddOp(option){

        if (!option){
            return 'Enter valid value'

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
            <div className="container">
            
            <Action 
            hasOptions= {this.state.options.length >0}
            handlePick = {this.handlePick}/>
            <div className="widget">
             <Options 
                option={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
            <AddOptions
                handleAddOp = {this.handleAddOp}
            />
            <OptionModal
            selectedOption={this.state.selectedOption} 
            handleCloseModal={this.handleCloseModal}
            />
            </div>
            </div>
            
    // </div>
        )
    }
}


IndecisionApp.defaultProps = {
    options: ['one','two']


}