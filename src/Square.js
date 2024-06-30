import React, { useMemo } from "react";

const Square = ({ number }) => {
  const squared = useMemo(() => {
    console.log(`Caclculating sqaure for ${number}`);
    return number * number;
  }, [number]);
  return (
    <div>
      <p>
        the Square of {number} is {squared}
      </p>
    </div>
  );
};

export default Square;
