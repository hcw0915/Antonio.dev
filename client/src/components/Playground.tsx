import { type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

type PlaygroundProps = {
  code?: any;
  langType?: SandpackPredefinedTemplate;
};

import { Sandpack } from "@codesandbox/sandpack-react";

import setupFiles from "@/example/demo";

export const Playground = (props: PlaygroundProps) => {
  const { code, langType = "react" } = props;

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
