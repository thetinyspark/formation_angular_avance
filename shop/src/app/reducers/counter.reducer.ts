import {createReducer, on, createAction} from '@ngrx/store';
export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const reset = createAction("RESET");
export const initialState = 0;
const myreducer = createReducer(initialState,
    on (increment,(state)=> state + 1),
    on (decrement,(state)=> state - 1),
    on (reset,(state)=> 0),
    
);

export function counterReducer(state:any,action:any) {
    return myreducer(state,action);
}