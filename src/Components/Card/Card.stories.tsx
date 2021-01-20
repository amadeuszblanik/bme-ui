import React from 'react';
import { BMECard, BMEText, BMEButton, BMEGrid } from '../../index';
import {PaletteValues} from "../../Theme/Theme";

export default {
    title: 'Components/Card',
};

export const Component = ({ ...args }) => (
    <BMEGrid>
        <BMEGrid.Col mobile={4} tablet={2} desktop={4} />
        <BMEGrid.Col mobile={4} tablet={4} desktop={4}>
            <BMECard {...args}>
                <BMECard.Header>
                    <BMEText size="xs" italic fontFamily="mono">
                        Header
                    </BMEText>
                </BMECard.Header>
                <BMECard.Thumbnail source="https://images.pexels.com/photos/2929243/pexels-photo-2929243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <BMECard.Body>
                    <BMEText fontFamily="sansSerif">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur hendrerit ipsum nec
                        faucibus. Integer at velit sem. Maecenas quis eros feugiat, hendrerit eros vel, molestie orci.
                        Aliquam laoreet tellus vitae justo luctus rutrum. Praesent vel sem sed dui fringilla molestie.
                        Cras facilisis dapibus nunc. Sed laoreet gravida metus at dapibus. Suspendisse sed placerat
                        risus, eu pretium nibh. Morbi urna dolor, luctus eu eros a, varius consectetur quam. Nunc dictum
                        nunc vitae ipsum cursus suscipit.
                    </BMEText>
                </BMECard.Body>
                <BMECard.Footer>
                    <BMEButton variant="tertiary" rounded>
                        Learn more!
                    </BMEButton>
                </BMECard.Footer>
            </BMECard>
        </BMEGrid.Col>
    </BMEGrid>
);

Component.argTypes = {
    background: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
    borderColour: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
};
