import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {counterActions} from "../store/index";

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.count.count);
    const show = useSelector(state => state.count.showCounter)
    const incrementHandler = (value) => {
        dispatch(counterActions.increment(value))
    }
    const decrementHandler = (value) => {
       dispatch(counterActions.decrement(value))
    };
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };
    const resetHandler = () => {
        dispatch(counterActions.reset())
    }
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button disabled={!show} onClick={() => {
                    incrementHandler(1)
                }}>Increment
                </button>
                <button disabled={!show} onClick={() => {
                    incrementHandler(5)
                }}>Increase by 5
                </button>
                <button disabled={!show} onClick={() => {
                    decrementHandler(1)
                }}>Decrement
                </button>
                <button disabled={!show} onClick={() => {
                    resetHandler()
                }}>Reset
                </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};


export default Counter
