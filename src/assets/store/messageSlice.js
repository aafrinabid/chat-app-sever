import {createSlice} from '@reduxjs/toolkit';

const messageSlice=createSlice({
    name:'message',
    initialState:{
        message:[{msg:'',
        from:''}
    ]},
    reducers:{
        addMessage(state,action){
            const newMessage=action.payload.message
            const from=action.payload.from
            state.message.push({msg:newMessage,from})
        }
    }
})

export const messageActions=messageSlice.actions
export default messageSlice.reducer