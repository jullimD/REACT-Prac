console.log("App is running");


let app = {
    title: "Build-It",
    details: "Details are shown",
    shown: false
};



const appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);


const render = () =>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onClickDet}>{app.shown==false? "Show Details":"Hide Details"}</button>
            {app.shown && (
                <div>
                <p>Here are some details</p>
                </div>
                )}
        
        
        </div>

    );
    root.render(template);
};


const onClickDet = () =>{
    app.shown = !app.shown;
    render();
}

render();






