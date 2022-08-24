// Import the required styles.
import './mylabel.css';

// Define the props interface. It must be exported.
// Do not forget to comment on the properties for documentation!
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
    fontColor?: string; // 'primary' | 'secondary' | 'tertiary';
}

/**
 * Implement the primary UI component for user interaction
 */
export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    allCaps = false,
    fontColor = 'primary',
}: LabelProps) => {
    return (
        <span className={`${size}`} style={{ color: `${fontColor}` }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};

export default MyLabel;
