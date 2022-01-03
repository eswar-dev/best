import React from 'react';

const Listitem = () =>
{
    const delete2 =(e)=>{
        let count=e.target.id;
        console.log(count)
        let items =JSON.parse(localStorage.getItem("details"));
    items = items.filter((item) => item.name !== count);
    // localStorage.removeItem("item", JSON.stringify(items));
        localStorage.setItem('details',JSON.stringify(items));
        window.location.reload(false);

console.log(items)
    }
    const details = localStorage.getItem('details');
    const detail = JSON.parse(details);
    // console.log(typeof(detail));
    if(detail)
    {
        const display = detail.map(ele=>
            {
               let id=ele.count;
                return (
                    <div className='col-sm-8 col-md-5 m-1 border border-secondary'>
                        <div className='row' style={{display:"flex",justifyContent:"space-between"}}>
                            <div className="col-3"><img src="logo192.png" alt={ele.name} width="100px" height="100px"></img></div>
                            <div className="col-8">
                                <h3>{ele.name}</h3>
                                <p>{ele.description}</p>
                            </div>
                            <button onClick={delete2} id={ele.name} className='btn btn-danger'> Delete</button>
                        </div>
                    </div>
                )
            });
        
            return display;
    }
    else
    {
        return (
            <div>
                <h2>Oops...!</h2>
            </div>
        )
    }
}

export default Listitem;