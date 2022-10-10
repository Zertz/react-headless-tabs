import * as React from "react";

function wait(fn: () => void, ms?: number): () => void {
  if (!ms && "requestIdleCallback" in window) {
    const ref = requestIdleCallback(fn);

    return () => cancelIdleCallback(ref);
  }

  const ref = setTimeout(fn, ms);

  return () => clearTimeout(ref);
}

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
        unmount?: "never" | number;
      }
    | {
        render?: "lazy";
        unmount?: "idle" | "never" | number;
      }
  )) {
  const [shouldRender, setShouldRender] = React.useState(!props.hidden);

  const renderRef = React.useRef<() => void>();
  const unmountRef = React.useRef<() => void>();

  React.useEffect(() => {
    if (!props.hidden) {
      setShouldRender(true);
    } else if (render === "idle") {
      renderRef.current = wait(() => setShouldRender(true));
    } else if (unmount === "idle") {
      unmountRef.current = wait(() => setShouldRender(false));
    }

    if (typeof unmount === "number") {
      unmountRef.current = wait(
        () => setShouldRender(!props.hidden),
        unmount * 1000
      );
    }

    return () => {
      renderRef.current?.();
      renderRef.current = undefined;
      unmountRef.current?.();
      unmountRef.current = undefined;
    };
  }, [props.hidden, render, unmount]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
