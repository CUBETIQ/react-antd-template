import { PlusCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./App.less";

function App() {
  const [coms, setComs] = React.useState<any>([]);

  const onCreate = () => {
    setComs([
      ...coms,
      { id: coms.length * Math.random(), text: `New: ${Math.random()}` },
    ]);
  };

  const onRemove = (com: any) => {
    setComs(coms.filter((c: any) => c.id !== com.id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <>Hello World</>
        <Button icon={<PlusCircleFilled />} onClick={onCreate} type={"primary"}>
          Create me
        </Button>
        {coms.map((com: any) => (
          <div key={com.id}>
            <Button onClick={() => onRemove(com)}>{com.text}</Button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
