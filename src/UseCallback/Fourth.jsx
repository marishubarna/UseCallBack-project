import React from "react";
import { taskConteks } from "../UseContect/TaskContecs";
import { useCallback, useMemo, memo } from "react";
const Fourth = () => {
  const { ChangesAndDelete } = useContext(taskConteks);
  return (
    <div>
      <input
        type="text"
        onChange={() => handelAdd()}
        placeholder="Додайте До Списку..."
      />

      <ul>
        {ChangesAndDelete.map((items, index) => (
          <li key={items.id}>
            {items.text}
            <button onClick={() => handelDelete()}>Видалити </button>
            <button onClick={() => changeState()}>Change State</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Fourth);
