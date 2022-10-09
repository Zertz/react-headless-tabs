import { Code, CodeBlock } from "./Code";

export function Documentation() {
  return (
    <>
      <div>
        <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
          <h2 className="text-4xl font-bold">useTabs</h2>
        </div>
        <div className="space-y-4">
          <CodeBlock>{`import { useTabs } from "react-headless-tabs";

const [
  selectedTab: string | null,
  setSelectedTab: (selectedTab: string | null) => void
] = useTabs(
  tabs: string[],
  defaultTab?: string | null
);`}</CodeBlock>
          <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
            <h3 className="text-3xl font-bold">Options</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">tabs</h4>
              </div>
              <p>
                Strings representing the list of tabs, can be static or dynamic.
              </p>
              <CodeBlock>tabs: string[]</CodeBlock>
            </div>
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">defaultTab</h4>
              </div>
              <p>The tab that should initially be selected.</p>
              <CodeBlock>defaultTab?: string | null</CodeBlock>
              <p>
                <em>Defaults to the first tab.</em>
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
            <h3 className="text-3xl font-bold">Returns</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">selectedTab</h4>
              </div>
              <p>
                The currently selected tab, can be null if there are no tabs or
                if <Code>defaultTab</Code> was initialized to null.
              </p>
              <CodeBlock>selectedTab: string | null</CodeBlock>
            </div>
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">setSelectedTab</h4>
              </div>
              <p>Update the selected tab, or pass null to select none.</p>
              <CodeBlock>
                {"setSelectedTab: (tab: string | null) => void"}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
          <h2 className="text-4xl font-bold">TabPanel</h2>
        </div>
        <div className="space-y-4">
          <CodeBlock>{`import { TabPanel, useTabs } from "react-headless-tabs";

const [selectedTab, setSelectedTab] = useTabs(["cats"]);

<TabPanel hidden={selectedTab !== "cats"}>The internet is for cats.</TabPanel>`}</CodeBlock>
          <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
            <h3 className="text-3xl font-bold">Props</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">hidden</h4>
              </div>
              <p>
                This is the built-in{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">
                  HTML attribute
                </a>
                , except it's required here. Typically based on{" "}
                <Code>{`selectedTab`}</Code> but could also include arbitrary
                logic based on the application's needs.
              </p>
              <CodeBlock>{`hidden: boolean`}</CodeBlock>
            </div>
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">render</h4>
              </div>
              <p>
                Depending on the use case, a set of tabs may have different
                rendering strategies. For the initial render to be as fast as
                possible, the default tab will always be rendered immediately no
                matter which strategy is set.
              </p>
              <CodeBlock>{`render?: "always" | "idle" | "lazy"`}</CodeBlock>
              <p>
                <Code>{`always`}</Code>: immediately mount the tab panel. While
                it is provided as an option, <Code>{`idle`}</Code> is usually a
                better choice.
              </p>
              <p>
                ⭐️ <Code>{`idle`}</Code>: eventually mount the tab panel, when
                the browser is finished doing more important work. Unless there
                are performance constraints to mounting the tab panel early,
                this typically provides the best user experience as it avoids
                flickering when the tab panel is initially selected.
              </p>
              <p>
                <Code>{`lazy`}</Code>: mount the tab panel on-demand, when
                <Code>{`hidden`}</Code> becomes <Code>{`false`}</Code>. This is
                ideal for post-poning data fetching or heavy work but may cause
                flickering when the tab is initially selected.
              </p>
              <em className="block">Defaults to idle</em>
            </div>
            <div className="space-y-2">
              <div className="mb-4 flex items-end justify-between border-b border-solid border-gray-400 pb-2">
                <h4 className="text-xl font-bold">unmount</h4>
              </div>
              <p>
                When <Code>{`render`}</Code> is set to <Code>{`lazy`}</Code>,
                this controls if and how the tab panel should be unmounted after
                it has been hidden. When <Code>{`render`}</Code> is set to{" "}
                <Code>{`always`}</Code> or <Code>{`idle`}</Code>, the tab panel
                is hidden but never unmounted.
              </p>
              <CodeBlock>{`unmount?: "always" | "idle" | "never" | number`}</CodeBlock>
              <p>
                <Code>{`always`}</Code>: immediately unmount the tab panel.
                While it is provided as an option, <Code>{`idle`}</Code> is
                usually a better choice.
              </p>
              <p>
                <Code>{`idle`}</Code>: eventually unmount the tab panel, when
                the browser is finished doing more important work.
              </p>
              <p>
                <Code>{`never`}</Code>: never unmount the tab panel. Unless
                there are performance constraints to keeping the tab panel
                mounted, this typically provides the best user experience as it
                avoids flickering when the tab panel is selected again.
              </p>
              <p>
                ⭐️ <Code>{`number`}</Code>: unmount the tab panel after the tab
                has been unselected for more than this amount of time, in
                seconds. This strategy can only be used when <Code>render</Code>{" "}
                is set to <Code>idle</Code> (default) or <Code>lazy</Code>.
              </p>
              <em className="block">Defaults to never</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
