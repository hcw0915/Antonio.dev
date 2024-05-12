// import { type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
// type PlaygroundProps = {
//   code?: any;
//   langType?: SandpackPredefinedTemplate;
// };
import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

import setupFiles from "@/example/demo";

export const Playground = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    // https://www.ctnicholas.dev/articles/how-to-use-sandpack-for-code-demos
    <Sandpack
      files={{ ...setupFiles }}
      template={"static"}
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
