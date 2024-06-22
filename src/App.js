import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, resetReducer, increment10} from "./redux/CounterReducer";
import {useForm} from "react-hook-form";
import {axiosDateUsers} from "./redux/addUser";

const App = () => {
    const {handleSubmit,reset,register ,formState:{errors}} = useForm()
    const dispatch = useDispatch()
    const {counter} = useSelector(state => state.counter)
    const minus = () => {
        if (counter > 0){
            dispatch(decrement(1))
        }
    }
    const minus10 = () => {
        if (counter > 0){
            dispatch(decrement(10))
        }
    }
    const addUser  = (data) => {
        dispatch(axiosDateUsers(data))
    }
    return (
        <div>
            <div>
                <h2>Counter</h2>
                <button onClick={minus}>-</button>
                <button onClick={minus10}>-10</button>
                <span>{counter}</span>
                <button onClick={() => dispatch(increment(1))}>+</button>
                <button onClick={() => dispatch(increment10(10))}>+10</button>
                <button onClick={() =>dispatch(resetReducer())}>reset</button>
            </div>
            <form onSubmit={handleSubmit(addUser)} style={{display:'flex', flexDirection:'column', width:'200px'}}>
                <h2>Registration</h2>
                <input
                    type="text"
                    placeholder='FullName'
                    {...register('FullName')}
                />

                <input
                    type="text"
                    placeholder='Email'
                    {...register('Email')}

                />
                <input
                    type="text"
                    placeholder='Username'
                    {...register('Username')}

                />
                <input
                    type="password"
                    placeholder='Password'
                    {...register('Password')}

                />
                <input
                    type="password"
                    placeholder=' ConfirmPassword'
                    {...register('ConfirmPassword')}

                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default App;