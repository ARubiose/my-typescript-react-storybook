/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<({ label, size, allCaps, fontColor, }: import("../../components/MyLabel").LabelProps) => JSX.Element>;
export default _default;
/**
 * This is a basic label with customized args
*/
export declare const Basic: ComponentStory<({ label, size, allCaps, fontColor, }: import("../../components/MyLabel").LabelProps) => JSX.Element>;
/**
 * A label with all caps
*/
export declare const AllCaps: ComponentStory<({ label, size, allCaps, fontColor, }: import("../../components/MyLabel").LabelProps) => JSX.Element>;
/**
 * A label with other color
*/
export declare const Secondary: ComponentStory<({ label, size, allCaps, fontColor, }: import("../../components/MyLabel").LabelProps) => JSX.Element>;
