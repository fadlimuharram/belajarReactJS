const app = {
    title:'ini title',
    subtitle:'ini sub',
    options:[]
};

const onFormSubmit = (e)=>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onHapus = ()=>{
    app.options = [];
    render();
};

const onBuatPilihan = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
    
};


const appRoot = document.getElementById('app');


const render = ()=>{
    const templateTwo = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length===0} onClick={onBuatPilihan}>Apa yang harus saya lakukan ?</button>
            <button onClick={onHapus}>Hapus</button>
            <ol>
            {
                app.options.map((opt,index)=>{
                    return <li key={index}>{opt}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}
render();
