import * as React from "react";

const idle =
  typeof window !== "undefined" && "requestIdleCallback" in window
    ? requestIdleCallback
    : setTimeout;

export function TabPanel({
  children,
  render = "idle",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  hidden: boolean;
  render?: "always" | "idle" | "lazy";
}) {
  const [shouldRender, setShouldRender] = React.useState(
    !props.hidden || render === "always"
  );

  React.useEffect(() => {
    if (props.hidden) {
      if (render === "idle") {
        idle(() => setShouldRender(true));
      }

      return;
    }

    setShouldRender(true);
  }, [props.hidden, render]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
