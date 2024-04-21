import { type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

type PlaygroundProps = {
  code?: string;
  langType?: SandpackPredefinedTemplate;
};

import { Sandpack } from "@codesandbox/sandpack-react";

export const Playground = (props: PlaygroundProps) => {
  const { code = "console.log('hello world')", langType = "react" } = props;

  const files = {
    "/App.js": `
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  console.log('asdasd')

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
export default App;
    `,
  };

  return (
    <Sandpack
      files={files}
      template={langType}
      theme={nightOwl}
      options={{
        showConsole: true,
        showRefreshButton: true,
        showConsoleButton: true,
        showLineNumbers: true,
        editorHeight: 680,
      }}
    />
    // </div>
  );
};
