// #0 - Import the storybook react types
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// #1 - Import the component
import { MyLabel } from '../../components/MyLabel';

// #2 - Default export of the tested component.
export default {
    /* 👇 The title prop groups the component stories under UI/MyLabel/ */
    title: 'UI/MyLabel', // Group stories (e.g. )
    component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

// #3 - Create template to build the component
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>;

// #4 - Create the stories
/**
 * This is a basic label with customized args 
*/
export const Basic = Template.bind({});
Basic.args = {
    label:'Basic label'
}
/**
 * A label with all caps
*/
export const AllCaps = Template.bind({});
AllCaps.args = {
    label:'All caps label',
    size:'h1',
    allCaps: true
}
/**
 * A label with other color
*/
export const Secondary = Template.bind({});
Secondary.args = {
    label:'Secondary label',
    color:'secondary'
}
