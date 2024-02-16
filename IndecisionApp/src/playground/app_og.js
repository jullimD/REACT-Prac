
console.log("App.js is running");


let testObj = {
    title: 'Challenge 1',
    subtitle: 'Success',
    options: []
};

const appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);

const numbers = [55, 101, 1000];

const onMakeDec = () =>{
    const randomNum = Math.floor(Math.random()* testObj.options.length);
    const option = testObj.options[randomNum];
    alert(option);
    console.log(randomNum);

};



const renderTemp = () =>{
    let template = (
        <div>
            <h1>{testObj.title}</h1>
            <p>Subtitle: {testObj.subtitle}</p>
            <button disabled={testObj.options.length ==0} onClick={onMakeDec}>What should I do?</button>
            <ol>
            {
                testObj.options.map((number,index) =>{
                    return <li key={index+1}>Item {index+1}: {number}</li>
                })
            }
        </ol>
        <form onSubmit={(onFormSubmit)}>
            <input type="text" name="option" />
            <button>Add Option</button>
            <button onClick={onClickReset}>Reset</button>
        </form>
        </div>
        );
        root.render(template);
};


/// JSX - Javascript XML

const onClickReset = () => {
    testObj.options = [];
    renderTemp();

}


const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option){
        testObj.options.push(option);
        e.target.option.value = '';
        renderTemp();
    }

    // console.log("Form Submit");
};

renderTemp();

