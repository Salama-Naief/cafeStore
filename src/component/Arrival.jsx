import React from 'react';

function Arrival(){
    return(
        <div className='mt-5 position-relative text-white arrival w-100'>
            <img src="./img/Best-Mens-Cowboy-Boots.jpg" className='img-fluid w-100' alt=""/>
            <div className="postion-absolute container">
                 <div className="position-absolute p-5 mt-md-5 ml-md-5" style={{top:"5rem",left:"0rem"}} >
                 <h1 className="display-2 pt-md-5 pb-md-3">New arrivals</h1>
                 <h2 className='pt-3 pb-md-5'>COLLECTION 2020</h2>
                 <a href="#card" className="btn btn-dark btn-lg">SHOP NOW</a>
                 </div>
            </div>
        </div>
    );
}
export default Arrival;