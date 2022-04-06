import * as React from "react";

export function TabPanel({
  children,
  render = "lazy",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  hidden: boolean;
  render?: "always" | "lazy";
}) {
  const [shouldRender, setShouldRender] = React.useState(render === "always");

  React.useEffect(() => {
    if (props.hidden) {
      return;
    }

    setShouldRender(true);
  }, [props.hidden]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
