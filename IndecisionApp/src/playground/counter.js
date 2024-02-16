const user = {
    // name: 'Julian',
    age: 22,
    loc: "TTDI, KL"
};

let count = 0;

const addOne = () =>{
    count++; 
    renderCounter();

};

//challenge
// Make button '-1' setup minus one
// Reset button 'reset

const minusOne = () =>{
    count--;
    renderCounter();
};


const reset = () =>{
    count = 0;
    renderCounter();

};



const appRoot = document.getElementById('app');
const root = ReactDOM.createRoot(appRoot);


const renderCounter = () =>{
    
    const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <h1>Minus</h1>
        <button onClick={minusOne}>-1</button>
        <h1>Reset</h1>
        <button onClick={reset}>Reset</button>
    </div>
);
    // ReactDOM.render(templateTwo, appRoot);
    root.render(templateTwo);
    
};
    
renderCounter();