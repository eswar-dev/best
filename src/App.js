import React from "react";
import './style.css'
import Form from "./form";
import Listitem from './ListItem'
// import ListItem from "./ListItem";
const App =() =>
{
    return(

        <div className='container'>
            <Form />
            <div className="container" style={{marginLeft:"40px",marginRight:""}}>
                <div className="row">
                 <Listitem />
                </div>
            </div>
        </div>
    )   
}

export default App;