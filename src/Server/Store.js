import {createStore} from 'redux';
import {cartdata} from '../Data/Data';
import {reducerState} from './Reducer';

const initialState = {
       cartdata:cartdata,
       cardItems:[],
       users:[]
};

const store =createStore(reducerState,initialState);

export default store;