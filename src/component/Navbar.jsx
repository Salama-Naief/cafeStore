import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
function Navbar(props){
    let amount=0;
    props.items.map((item)=>(item.amount>0)?amount=amount+1:amount);
    return(

            <nav className="navbar navbar-expand bg-white fixed-top pb-0 shadow">
                <div className="container text-center">
                    <ul className="navbar-nav d-flex w-100">
                        <li className="nav-item w-25">
                            <Link to="/" className="nav-link text-dark"><i className="fas fa-home fa-2x"></i></Link>
                        </li>
                        <li className="nav-item w-50">
                            <h1 className="mb-0 text-dark">Jeans</h1>
                        </li>
                        <li className="nav-item w-25 position-relative">
                            <Link to="/cardplus" className="nav-link text-dark"><span className='badge-pill badge badge-danger pr-2 pl-2 position-absolute' style={{top:'0px'}}><p className='mb-0'>{amount}</p></span> <i className="fas fa-cart-plus mt-2 mr-1"style={{fontSize:"1.7rem"}}></i></Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
    );
}
const mapStateToProps=(state)=>{
    return{
        items:state.cartdata
    }
}
export default connect(mapStateToProps)(Navbar);