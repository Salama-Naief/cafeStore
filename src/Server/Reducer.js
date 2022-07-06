
export function reducerState(state,action){
    switch(action.type){
        case "AMOUNT":{
            const newState= state.cartdata.filter((val)=>val.info.id===action.id);
            const oldState= state.cartdata.filter((val)=>val.info.id!==action.id);
            const cards=[...state.cardItems];
            const sortedArr=[
                {
                    ...newState[0],
                    amount:action.amount
                },
                ...oldState
             ]
            sortedArr.sort(function(a, b){return a.info.id-b.info.id});

            return {
                ...state,
                cartdata:sortedArr,
                cardItems:[...cards,{infoo:action.card,amo:action.amount}]
            };
        }
        case "DELETE":{
            const newState= state.cardItems.filter((val)=>val.infoo.id!==action.id);
            const neww= state.cartdata.filter((val)=>val.info.id===action.id);
            const old= state.cartdata.filter((val)=>val.info.id!==action.id);
            const sortedArr=[
                {
                    ...neww[0],
                    amount:0
                },
                ...old
             ]
            sortedArr.sort(function(a, b){return a.info.id-b.info.id});
            console.log(neww);
            console.log(action);
            return{
                ...state,
                cardItems:newState,
                cartdata:sortedArr
                
            }
        }
        case "USERS":{
           
            return{
                ...state,
                users:[...state.users,action.users]
            }
        }
        case "CLEAR":{
            const old= state.cartdata.map((val)=>{return({info:val.info,amount:0})});
            return{
                ...state,
                cardItems:[],
                cartdata:old
            }

        }
        default : return state;
    }
}