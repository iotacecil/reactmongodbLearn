
const ADD = "add"
const REMOVE ="remove"
export function counter(state=0,action) {
    switch (action.type){
        case ADD:
            return state+1
        case REMOVE:
            return state-1
        default:
            return 10
    }
}

export function add() {
    return {type:ADD}
}

export function remove() {
    return {type:REMOVE}
}

export function addAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}