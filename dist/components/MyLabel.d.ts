/// <reference types="react" />
import './mylabel.css';
export interface LabelProps {
    /**
     * This is the definition of the property label.
     * e.g. Label contents
     */
    label: string;
    /**
     * Common label sizes for labels
     */
    size: 'normal' | 'h1' | 'h2' | 'h3"';
    /**
     * Is the label all capps
     */
    allCaps?: boolean;
    /**
     * Color of the label. which color looks good?.
     * Watch out if the docstring starts with color the controls of
     * this property became a color picker.
     */
    fontColor?: string;
}
/**
 * Implement the primary UI component for user interaction
 */
export declare const MyLabel: ({ label, size, allCaps, fontColor, }: LabelProps) => JSX.Element;
