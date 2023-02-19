import React, { forwardRef } from "react";

const Component = forwardRef<HTMLOptGroupElement, React.OptgroupHTMLAttributes<HTMLOptGroupElement>>((props, ref) => (
  <optgroup ref={ref} {...props} />
));

Component.displayName = "BmeSelectOption";

export default Component;
