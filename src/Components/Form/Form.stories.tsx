import React, {useState} from "react";
import {BMEForm} from "../../index";

export default {
  title: "Form"
};


export const Component = () => (
  <BMEForm>
    <BMEForm.TextField />
  </BMEForm>
);

export const TextField = ({ value, ...args }) => {
  const [stateValue, setStateValue] = useState(value);

  return (
    <BMEForm>
      <BMEForm.TextField value={stateValue} onChange={setStateValue} {...args} />
    </BMEForm>
  );
}

TextField.args = {
  value: '',
  name: 'name',
  label: 'Name',
  characterLimit: 20,
  helperText: 'eg. John Doe',
  errorText: 'This field is not valid',
  required: true,
}

TextField.argTypes = {
  value: {
    control: {
      type: 'text',
    },
  },
  name: {
    control: {
      type: 'text',
    },
  },
  label: {
    control: {
      type: 'text',
    },
  },
  characterLimit: {
    control: {
      type: 'number',
    },
  },
  helperText: {
    control: {
      type: 'string',
    },
  },
  errorText: {
    control: {
      type: 'string',
    },
  },
  required: {
    control: {
      type: 'boolean',
    },
  },
  valid: {
    control: {
      type: 'boolean',
    },
  },
};
