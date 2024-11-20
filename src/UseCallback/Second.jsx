import React from "react";
import { useCallback, useState } from "react";
const Button = React.memo(({ onClick, label }) => {
  console.log(`redering button ${label}`);
  return <button onClick={onClick}>{label}</button>;
});
const ButtonPanel = () => {
  const [contA, setContA] = useState(0);
  const [contB, setContB] = useState(0);
  const [contC, setContC] = useState(0);

  const handelContA = useCallback(() => setContA((prev) => prev + 1), [contA]);
  const handelContB = useCallback(() => setContB((prev) => prev + 1), [contB]);
  const handelContC = useCallback(() => setContC((prev) => prev + 1), [contC]);
  return (
    <div>
      <Button onClick={handelContA} label={`Conting: ${contA}`} />
      <Button onClick={handelContB} label={`${contB}`} />
      <Button onClick={handelContC} label={`${contC}`} />
    </div>
  );
};

export default ButtonPanel;
