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
        render: "always";
        unmount?: never;
      }
    | {
        render?: "idle" | "lazy";
        unmount?: "always" | "idle" | "never" | number;
      }
  )) {
  const [shouldRender, setShouldRender] = React.useState(
    !props.hidden || render === "always"
  );

  const unmountTimer = React.useRef<number>();

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
    } else if (typeof unmount === "number") {
      unmountTimer.current = window.setTimeout(() => {
        setShouldRender(false);
      }, unmount * 1000);
    }

    return () => {
      if (typeof unmountTimer.current === "number") {
        clearTimeout(unmountTimer.current);
      }

      unmountTimer.current = undefined;
    };
  }, [props.hidden, render, unmount]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
