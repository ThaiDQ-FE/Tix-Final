import React, { useEffect, useState } from "react";
import "./styles.scss";
import Home from ".";
function LoadingHome() {
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
        <div
          className="main-loading"
          style={{
            width: `${100}%`,
            height: `${100}vh`,
            position: "absolute",
            top: 0,
            left: 0,
            background: "#fff",
          }}
        >
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
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}
export default LoadingHome;
