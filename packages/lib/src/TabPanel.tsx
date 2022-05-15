import * as React from "react";

export function TabPanel({
  children,
  render = "idle",
  unmount = "never",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  hidden: boolean;
} & (
    | {
        render?: "always" | "idle";
        unmount?: "never";
      }
    | {
        render?: "lazy";
        unmount?: "always" | "idle" | "never";
      }
  )) {
  const [shouldRender, setShouldRender] = React.useState(
    !props.hidden || render === "always"
  );

  React.useEffect(() => {
    if (!props.hidden || render === "always") {
      setShouldRender(true);
    } else if (render === "idle") {
      ("requestIdleCallback" in window ? requestIdleCallback : setTimeout)(() =>
        setShouldRender(true)
      );
    } else if (unmount === "always") {
      setShouldRender(false);
    } else if (unmount === "idle") {
      ("requestIdleCallback" in window ? requestIdleCallback : setTimeout)(() =>
        setShouldRender(false)
      );
    }
  }, [props.hidden, render, unmount]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
