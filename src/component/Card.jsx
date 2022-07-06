import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
function CardPlus (props){
   let path=(props.length===0)?"/":"cardplus";
    return(
        <div className=''>
            <div className="row mt-3 ml-0 mr-0">
                <div className="col-4 pr-0 " style={{overflow:'hidden',display:"flex",justifyContent:"center"}}>
                    <img src={props.card.infoo.img} className="rounded" style={{height:"10rem",width:"10rem",objectFit:"cover"}} alt=""/>
                </div>
                <div className="col pl-3">
                    <p> <span className="text-danger">Name : </span>{props.card.infoo.name}</p>
                    <p><span className="text-danger">Amount : </span>{props.card.amo}</p>
                    <p><span className="text-danger">Price : </span>{props.card.infoo.price}$</p>
                    <Link to={path}  className='btn btn-danger btn-sm' onClick={()=>props.Delete(props.card.infoo.id)}>remove</Link>
                </div>
            </div>

        </div>
    );
   
}
const mapDispatchToProps=(dispatch)=>{
    return{
        Delete:(id)=>dispatch({type:"DELETE",id:id})
    }
}

export default connect('',mapDispatchToProps)(CardPlus);