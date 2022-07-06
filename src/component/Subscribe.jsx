import React from 'react';
function Subscribe(){
    return(
        <div className="container bg-black ">
           <div className="pt-5 pr-3 pl-3 pb-5">
                <p className="display-4">
                Subscribe
                </p>
                <p>To get special offers and VIP treatment:</p>
                <form action="" className='mt-3'>
                    <input type="email" className='form-control' placeholder="Enter-Email"/>
                    <button className='btn btn-danger btn-md mt-4'>Subscribe</button>
                </form>
            </div>
        </div>
    );
}
export default Subscribe;