import React from "react";

interface Item {
  type: "option";
  key: string | number;
  label: string;
  selected: boolean;
  disabled: boolean;
}

interface Group {
  type: "group";
  label: string;
  options: Item[];
}

export type ChildrenList = Group[] | Item[];

const utils = (children: React.ReactNode): ChildrenList => {
  const items: Item[] = [];
  const groups: Group[] = [];
  const childrenArray = React.Children.toArray(children);

  childrenArray.forEach((child) => {
    if (React.isValidElement(child)) {
      const { type, props } = child;

      if (type === "option" || (type as any).displayName === "BmeSelectOption") {
        items.push({
          type: "option",
          key: props.value,
          label: props.label,
          selected: props.selected || false,
          disabled: props.disabled || false,
        });
      } else if (type === "optgroup" || (type as any).displayName === "BmeSelectGroup") {
        groups.push({
          type: "group",
          label: props.label,
          options: utils(props.children) as Item[],
        });
      }
    }
  });

  return groups.length ? groups : items;
};

export default utils;
