import React from 'react';
import {Link} from 'react-router-dom';

function Card(props){
console.log(props?.item)
    return(
        <div >
           <div className="card mt-3 text-left" >
                <img src={props.item?.img} className="card-img-top img-fluid" style={{width:"14rem",height:"18rem",objectFit:"cover"}} alt=""/>
                <div className="card-body">
                    <p className="card-text">{props.item?.name}</p>
                    <p className="card-text font-weight-bold">{"$"+props.item?.price}</p>
                    <Link to={"/details/"+props.item?.id} className="btn btn-primary">Buy</Link>
                </div>
            </div>
        </div>
    );
}
export default Card;