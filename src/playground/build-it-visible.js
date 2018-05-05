let showDetail = true;

const tampil = ()=>{
    showDetail = !showDetail;
    render();
}


const appRoot = document.getElementById('app');

const render = ()=>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={tampil}>{showDetail?'Hide Details':'Show Details'}</button>
            { showDetail?<p>Hey these are some details you can now see</p>:undefined }
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();
