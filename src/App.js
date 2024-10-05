
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './rtk/counterSlice';
function App() {
  const mystate=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <div className="App">
 <h1>Redux Toolkit</h1>
 <input type='text' value={mystate}/>
 <button onClick={()=>dispatch(increment())}>+</button>
 <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
  );
}

export default App;
