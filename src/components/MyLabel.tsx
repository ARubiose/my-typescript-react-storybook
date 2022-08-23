// Import the required styles.
import './mylabel.css';

// Define the props interface.
// Do not forget to comment on the properties for documentation!
interface LabelProps {
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
    color?: string; // 'primary' | 'secondary' | 'tertiary';
}

/**
 * Implement the primary UI component for user interaction
 */
export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
}: LabelProps) => {
    return (
        <span className={`${size}`} style={{ color: `${color}` }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
