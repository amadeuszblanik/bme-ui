import React, { forwardRef } from "react";

const Component = forwardRef<HTMLOptionElement, React.OptionHTMLAttributes<HTMLOptionElement>>((props, ref) => (
  <option ref={ref} {...props} />
));

Component.displayName = "BmeSelectOption";

export default Component;
