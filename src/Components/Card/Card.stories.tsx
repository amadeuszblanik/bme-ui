import React from "react";
import {BMECard, BMEText, BMEButton} from "../../index";

export default {
  title: "Card"
};

export const Component = ({...args}) => (
  <>
    <BMECard {...args}>
      <BMECard.Header>
        <BMEText size="xs" italic fontFamily="mono">
          Header
        </BMEText>
      </BMECard.Header>
      <BMECard.Thumbnail source="https://images.pexels.com/photos/2929243/pexels-photo-2929243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <BMECard.Body>
        <BMEText fontFamily="sansSerif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur hendrerit ipsum nec faucibus. Integer at velit sem. Maecenas quis eros feugiat, hendrerit eros vel, molestie orci. Aliquam laoreet tellus vitae justo luctus rutrum. Praesent vel sem sed dui fringilla molestie. Cras facilisis dapibus nunc. Sed laoreet gravida metus at dapibus. Suspendisse sed placerat risus, eu pretium nibh. Morbi urna dolor, luctus eu eros a, varius consectetur quam. Nunc dictum nunc vitae ipsum cursus suscipit.
        </BMEText>
      </BMECard.Body>
      <BMECard.Footer>
        <BMEButton variant="tertiary" rounded>
          Learn more!
        </BMEButton>
      </BMECard.Footer>
    </BMECard>
  </>
);

Component.argTypes = {
  background: {
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
    },
  },
  borderColour: {
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'dark', 'light'],
    },
  },
};
