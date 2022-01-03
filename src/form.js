import React,{useRef} from "react";
import './Listitem.css';
var details = localStorage.getItem('details');
if(details)
{
    details = JSON.parse(localStorage.getItem('details'));
}
else
{
    details = [];
}
const Form = () =>
{
    const name = useRef();
    const description = useRef();
    const filePath = useRef();
    const addName = (e) =>
    {
        e.preventDefault();
        // console.log(name.current.value);
        // console.log(description.current.value);
        // console.log(filePath.current.value);
        var path = filePath.current.value
        var image = path.split('\\');
        const detail = {
            name : name.current.value,
            filePath : image[2],
            description : description.current.value,
            
        }
        details.push(detail)
        localStorage.setItem('details',JSON.stringify(details));
        // console.log(details);

    }

    
    return (
        <div className="container">
            <form onSubmit={addName}>
                <div className="form-group m-3 name">
                    <input type="text" className="form-control" style={{marginRight:"20px"}} placeholder="Name" ref={name}/>
                    <input type="file" className="form-control" placeholder="Image" ref={filePath}/>
                </div>
                <div className="form-group">
                    <textarea rows="3" className="form-control" ref={description} placeholder="description"></textarea>
                </div>
                <div className="form-group m-3">
                    <button className="btn btn-primary form-control" onClick={() => window.location.reload(false)}>Add</button>
                </div>
            </form>
        </div>
    )}

export default Form;