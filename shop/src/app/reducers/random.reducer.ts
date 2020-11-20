import {createReducer, on, createAction} from '@ngrx/store';
export const addRandomNumber = createAction("ADDRANDOM");

export const initialState:number[] = [];
const myreducer = createReducer(initialState,
    on (addRandomNumber,(state) => {let nstate = [...state];nstate.push(Math.random());return nstate}),    
);

export function randomReducer(state:any,action:any) {
    return myreducer(state,action);
}