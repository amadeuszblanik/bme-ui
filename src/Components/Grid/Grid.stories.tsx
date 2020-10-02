import React from "react";
import {BMEBox, BMEGrid, BMEText} from "../../index";

export default {
  title: "Grid"
};

export const Component = ({content, ...args}) => (
  <>
    <BMEBox width="full" direction="column">
      <BMEGrid.Container>
        <BMEGrid>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>1</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>2</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>3</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>4</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>5</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>6</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>7</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>8</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>9</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>10</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>11</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={1} tablet={1} desktop={1}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>12</BMEText>
            </BMEBox>
          </BMEGrid.Col>
        </BMEGrid>
        <BMEGrid>
          <BMEGrid.Col {...args}>
            <BMEBox background="primary" padding={{x: "m", y: "s"}}>
              <BMEText>Yours</BMEText>
            </BMEBox>
          </BMEGrid.Col>
          <BMEGrid.Col mobile={2} tablet={4} desktop={6}>
            <BMEBox background="secondary" padding={{x: "m", y: "s"}}>
              <BMEText>Mobile 2 Tablet 4 Desktop 6</BMEText>
            </BMEBox>
          </BMEGrid.Col>
        </BMEGrid>
      </BMEGrid.Container>
    </BMEBox>
  </>
);

Component.args = {
  content: 'Lorem ipsum dolor sit amet.'
}

Component.argTypes = {
  content: {
    control: 'text',
  },
  mobile: {
    control: {
      type: 'inline-radio',
      options: [1, 2, 3, 4],
    },
  },
  tablet: {
    control: {
      type: 'inline-radio',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  desktop: {
    control: {
      type: 'inline-radio',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  }
}

