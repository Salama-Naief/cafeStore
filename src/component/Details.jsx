import React ,{useState,useEffect}from 'react';
import {Link,useParams} from 'react-router-dom';
import {connect} from 'react-redux';


function Details (props){
    const params=useParams();
    const [amount,setAmount]=useState(1)
    const [newCard,setNewCard]=useState(null)
    const id=params.id;
    //let idd =history.location.pathname.charAt(history.match.url.length-1);
   
    console.log(id)


useEffect(()=>{
    
    setNewCard(props.items.find((item)=>id==item.info.id))

},[id])
const handleChange=(event)=>{
    setAmount(
        event.target.value
    )
}
console.log(newCard)

    return(
        <div className="overlay " style={{height:"100vh",overflow:"hidden"}}> 
          <div className="cardd position-relative pr-md-3" >
              <span className="position-fixed" style={{top:"0.5rem",right:'1.5rem',zIndex:"20"}}>
              <Link to="/"  className="close text-dark" >
                      <span aria-hidden="true">&times;</span>
              </Link>
              </span>
          <div className='row h-100 ml-0 mr-0'>
               <div className="col-md p-3">
                   <img src={newCard?.info.img} className="rounded w-100 h-100" style={{objectFit:"cover",height:"100%"}} alt=""/>
               </div>
               <div className="col-md pt-4 ">
                   <h5>Name :{newCard?.info.name}</h5>
                   <p className='pt-4'><span className='font-weight-bold'>Info :</span>{newCard?.info.datail}</p>
                   <p className='pt-4'><span className="font-weight-bold">Price: </span>{"$"+newCard?.info.price}</p>
                   <p className='pt-4'><span className="font-weight-bold">TotalPrice: </span>${(newCard?.amount!==0)?newCard?.amount*newCard?.info.price:newCard?.info.price*amount}</p>
                   <form action="" className="text-right">
                       <input type="number" min={0} value={amount} onChange={handleChange} className='form-control' placeholder='Amount'/>
                       <Link className="btn btn-success mt-4 " to={'/cardplus'} onClick={()=>props.Amount(newCard?.info.id,amount,newCard?.info)}>Buy</Link>
                   </form>
               </div>
          </div>
          </div>
      </div>
  );


}
const mapStateToProps=(state)=>{
    return{
        items:state.cartdata
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        Amount:(id,coute,card)=>dispatch({type:"AMOUNT",id:id,amount:coute,card:card})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Details);