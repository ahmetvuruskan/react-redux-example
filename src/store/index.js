import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialCounterState = {
    count: 0,
    showCounter: false,
}

const counterSlice = createSlice({
    name: 'count',
    initialState:initialCounterState,
    reducers: {
        increment(state, action) {
            state.count = state.count + action.payload
        },
        decrement(state, action) {
            state.count = state.count - action.payload
        },
        toggle(state) {

            state.showCounter = !state.showCounter
        },
        reset(state) {
            state.count = 0
        }
    }
})


const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});


const store = configureStore({
    reducer: {count: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store

