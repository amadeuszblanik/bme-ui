import React from 'react';
import { BMEAccordion, BMEGrid, BMEText } from '../../index';
import { PaletteValues } from '../../Theme/Theme';

export default {
    title: 'Components/Accordion',
};

export const Component = ({ ...args }) => (
    <BMEGrid>
        <BMEGrid.Col mobile={4} tablet={2} desktop={3} />
        <BMEGrid.Col mobile={4} tablet={4} desktop={6}>
            <BMEAccordion {...args}>
                <BMEAccordion.Item title="Lorem ipsum dolor sit amet">
                    <BMEText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan nisl eget lorem ultricies
                        suscipit. Quisque egestas in felis non lobortis. Ut quis ante quis lectus accumsan tempor. Proin
                        et efficitur sapien, vitae auctor nibh. Nulla efficitur rutrum ligula, et convallis eros cursus
                        nec. Vivamus et ante nec nunc luctus porta ac vitae odio. Sed a eros quam. Nulla blandit
                        fringilla dui, nec sollicitudin nulla suscipit vitae. Donec in nibh libero. Nulla a dignissim
                        lorem. Sed a augue lobortis, ornare velit nec, placerat nulla. Phasellus facilisis, augue ac
                        rhoncus eleifend, sapien orci egestas urna, vel tristique metus quam ac nisi.
                    </BMEText>
                </BMEAccordion.Item>
                <BMEAccordion.Item title="Aenean tristique non ante sed rutrum">
                    <BMEText>
                        Aenean tristique non ante sed rutrum. Duis ac malesuada lacus. Integer massa nisi, accumsan
                        consequat finibus in, placerat ac risus. Pellentesque pellentesque in dolor ut molestie. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam
                        scelerisque odio sed eros tincidunt, vitae dignissim augue elementum. Sed dapibus sagittis
                        pellentesque. Donec eget lectus lorem. Aenean vel rutrum tellus. Sed vitae urna ipsum.
                    </BMEText>
                </BMEAccordion.Item>
                <BMEAccordion.Item title="Praesent lobortis facilisis tortor">
                    <BMEText>
                        Praesent lobortis facilisis tortor, non egestas sapien consectetur nec. Mauris tristique eget
                        lorem dignissim aliquet. Sed sagittis ipsum nisi, at ultricies leo rutrum at. Cras imperdiet
                        rutrum nunc ac tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Phasellus a tellus in felis lobortis imperdiet non in tortor. Aenean gravida dignissim
                        ullamcorper. Cras ac bibendum metus, et iaculis nulla. In eu elit dignissim, malesuada orci id,
                        euismod neque. Sed tempor ultricies porttitor. Sed pellentesque nibh vitae commodo pellentesque.
                        Aliquam erat volutpat.
                    </BMEText>
                </BMEAccordion.Item>
            </BMEAccordion>
        </BMEGrid.Col>
    </BMEGrid>
);

Component.argTypes = {
    variant: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
    variantActive: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
};
