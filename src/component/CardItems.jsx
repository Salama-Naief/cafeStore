import React from 'react';
import {connect} from 'react-redux';
import Card from './Cart';

 
function CardItem(props){
    let rowOne=[];
    let rowTwo=[];
     props.items.map((item,index)=>(index<=3)?rowOne.push(item.info):rowTwo.push(item.info));
   return(
        <div id='card' className="container">
            <div className="row mt-3">
                {rowOne.map((item,index)=><div key={index} className="col-md-4 col-lg-3 col-sm-6"><Card item={item}/></div>)}
            </div>
            <div className="row">
            {rowTwo.map((item,index)=><div key={index} className="col-md-4 col-lg-3 col-sm-6"><Card item={item}/></div>)}
            </div>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        items:state.cartdata
    }
}
export default connect(mapStateToProps)(CardItem);