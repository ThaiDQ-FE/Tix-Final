import React from "react";

function Test({ a }) {
  let b = a.join();
  //   words.filter(word => word.length > 6);
  console.log(b);
  return <div>{a}</div>;
}
export default Test;
