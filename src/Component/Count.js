import React, { useEffect, useState } from "react";

//styling
import "./Count.css";

const Count = (props) => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const { type, number, duration } = props.data;

  // number displayed by component
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    let typeSign = type;
    let end;

    // first three numbers from props
    // const end = parseInt(number.substring(0, 3));

    if (number.includes("-")) {
      const [min, max] = number.split("-");
      end = parseInt(max);
      typeSign = type; // In case you want to display the type from the data
    } else {
      end = parseInt(number);
    }

    // if zero, return
    if (start === end) return;

    // find duration per increment
    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / (end - start)) * 1000;

    // let totalMilSecDur = parseInt(duration);
    // let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(`${start}${typeSign}`);
      // setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // cleanup function
    return () => clearInterval(timer);
    // dependency array
  }, [number, duration,type]);

  return (
    <div className="Count">
      <h3>
        {count}
        {/* {type} */}
      </h3>
    </div>
  );
};

export default Count;



