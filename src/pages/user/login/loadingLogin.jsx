import React, { useEffect, useState } from "react";
import Login from ".";
import "./styles.scss";

function LoadingLogin() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {loading ? (
        <img
          style={{
            position: "absolute",
            top: `${50}%`,
            left: `${50}%`,
            transform: `translate(${-50}%, ${-50}%)`,
            width: 500,
          }}
          src="https://i.ibb.co/L1s2qL8/image-processing20200608-18943-1rq8paq.gif"
          alt="image-processing20200608-18943-1rq8paq"
        />
      ) : (
        <Login />
      )}
    </>
  );
}
export default LoadingLogin;
