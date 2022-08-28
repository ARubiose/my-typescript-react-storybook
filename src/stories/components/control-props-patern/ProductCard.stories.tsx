// #0 - Import the storybook react types
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from '../../../components/control-props-patterns/components';
// #1 - Import the component

// #2 - Default export of the tested component.
export default {
    /* 👇 The title prop groups the component stories under UI/MyLabel/ */
    title: 'UI/ProductCard', // Group stories (e.g. )
    component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

// #3 - Create template to build the component
const Template: ComponentStory<typeof ProductCard> = (args) => (
    <ProductCard {...args} />
);

// #4 - Create the stories
/**
 * This is a basic label with customized args
 */
export const Basic = Template.bind({});

const product = {
    id: "1",
    title: "Coffe Mug - Card",
    // img: "./coffee-mug.png",
};
Basic.args = {
    children: [
        <ProductCard.Image className={'custom-image'} />,
        <ProductCard.Title className={'text-bold'} />,
        <ProductCard.Buttons className={'custom-buttons'} />,
    ],
    product: product
};
