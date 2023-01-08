import { useState } from "react";
import {toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Button() {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          toast.success("Felicidades, ya estas suscrito");
          setSubscribe(!subscribe);
        }}
      >
        {subscribe ? "Ya estas suscrito" : "Sucribete"}
      </button>
      <ToastContainer />
    </>
  );
}

export default Button;
