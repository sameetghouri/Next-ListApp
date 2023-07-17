'use client'
import Link  from 'next/link';

import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,incrementByAmount,reset} from '../GlobalReduxT/counter';
export default function Home() {
  const count = useSelector((state)=>state.counter.count)
  const dispatch= useDispatch();
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h2 className='font-bold'>count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() =>dispatch(decrement())}>Decrement</button>
      <button onClick={() =>dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() =>dispatch(reset())}>Reset</button>


    </div>
  )
}
