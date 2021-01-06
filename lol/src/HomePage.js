import React from "react";
import { Counter, List } from "design-system";
import { inject, observer } from "mobx-react";

const style = {
  height: 400,
  backgroundColor: "#254527",
  color: "white",
  padding: 12,
};

const HomePage = inject((stores) => stores)(
  observer((props) => {
    const { shellStore, lolStore } = props;

    return (
      <div style={style}>
        <h1>LoL Page</h1>
        <h2>Welcome to the LoL!</h2>
        <p>
          <em>a page being provided by LoL</em>
        </p>

        <div>LOL Store</div>
        <Counter
          value={lolStore.counter}
          onIncrement={lolStore.increment}
          onDecrement={lolStore.decrement}
        />

        <div>Shell Store</div>
        <List
          items={shellStore.numbers}
          onPush={shellStore.push}
          onPop={shellStore.pop}
        />
      </div>
    );
  })
);

export default HomePage;
