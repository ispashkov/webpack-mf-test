import React from "react";
import { observer } from "mobx-react-lite";
import { useLolStore } from "lol/store";
import { useShellStore } from "./store";
import { Counter, List } from "design-system";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = observer(() => {
  const shellStore = useShellStore();
  const lolStore = useLolStore();

  return (
    <div style={style}>
      <h1>Home Page</h1>
      <h2>Welcome to the App Shell!</h2>
      <p>
        <em>a page being provided by App Shell</em>
      </p>

      <div>LOL Store</div>
      <Counter
        value={lolStore.counter}
        onIncrement={lolStore.increment}
        onDecrement={lolStore.decrement}
      />

      <hr />

      <div>Shell Store</div>
      <List
        items={shellStore.numbers}
        onPush={shellStore.push}
        onPop={shellStore.pop}
      />
    </div>
  );
});

export default HomePage;
