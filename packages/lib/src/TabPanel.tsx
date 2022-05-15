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
        render?: "idle";
        unmount?: "never";
      }
    | {
        render?: "always" | "lazy";
        unmount?: "always" | "idle" | "never";
      }
  )) {
  const [shouldRender, setShouldRender] = React.useState(
    !props.hidden || render === "always"
  );

  React.useEffect(() => {
    if (!props.hidden) {
      setShouldRender(true);

      return;
    }

    if (render === "idle") {
      ("requestIdleCallback" in window ? requestIdleCallback : setTimeout)(() =>
        setShouldRender(true)
      );

      return;
    }

    switch (unmount) {
      case "always": {
        setShouldRender(false);

        break;
      }
      case "idle": {
        ("requestIdleCallback" in window ? requestIdleCallback : setTimeout)(
          () => setShouldRender(false)
        );

        break;
      }
    }
  }, [props.hidden, render, unmount]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
