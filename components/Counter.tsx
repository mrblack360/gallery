"use client";

import { increase, decrease } from "@app/store/slices/counterSlice";
import type { RootState } from "@app/store/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button
        type="submit"
        className="m-2 px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        onClick={() => dispatch(decrease())}
      >
        -
      </button>
      <span className="m-auto">{counter}</span>
      <button
        type="submit"
        className="m-2 px-5 py-1.5 text-sm black_btn rounded-full text-white"
        onClick={() => dispatch(increase())}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
