import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
function CardPlus (props){

    let length =props.cards.length;
    let totalPrice=0;
    let Price=0;
    {props.cards.map((card)=>Math.round(Price=(card.amo)*(card.infoo.price)))}
    totalPrice =totalPrice+ Price;
        return(
            <div className='cardPlus mt-5 pt-4 border-left border-dark '>
                <div className="text-center text-danger mb-3"><h6>Card Items</h6></div>
                 
                <hr/> 
                {(length===0)?<div className="text-danger text-center">Card is Empity</div>:props.cards.map((card)=><div key={card.infoo.id}><Card card={card} length={length-1}/></div>)}
                <div className="text-center mt-3">
                <div className='pr-3 pl-3'>
                   <h6><span className="text-danger">TotalPrice</span> :{Math.round(totalPrice)} $</h6>
                    <button className="btn btn-primary w-100" onClick={()=>props.Empity()}>Pay</button>
                </div>
                </div>
            </div>
        );

}
const mapSteteToProps=(state)=>{
    return{
        cards:state.cardItems
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        Empity:()=>dispatch({type:"CLEAR"})
    }
}
export default connect(mapSteteToProps,mapDispatchToProps)(CardPlus);