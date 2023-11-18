const initState ={
    user:[
        { 
            id: 1,
            name: 'Nguyen'
        },
        { 
            id: 2,
            name: 'Phong'
        }
    ]
}

const rootReducer =(state = initState,action) =>{
    return state;
}
export default rootReducer;