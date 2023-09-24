import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export type LoginState = {
  users: String,
  auth: Boolean,
};

const initialState: LoginState = {
  users: "",
  auth: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    verifyAccount: (state,payload) => {
        const {username, password} = payload.payload
        if(username == 'demo' || username == 'Demo') {
            state.auth = true;
        } else {
            state.auth = false;
        }

    },
    logout : (state) => {
        state.auth = false;
    }
  },
  
});
export const { verifyAccount,logout } = loginSlice.actions;
export default loginSlice.reducer;