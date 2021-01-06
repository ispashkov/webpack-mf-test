import React from "react";
import { observer } from "mobx-react-lite";

export const List = observer(({ items, onPush, onPop }) => (
  <div>
    <pre>{JSON.stringify(items)}</pre>
    <button onClick={onPush}>push</button>
    <button onClick={onPop}>pop</button>
  </div>
));
