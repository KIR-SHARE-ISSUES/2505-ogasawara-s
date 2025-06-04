import { RadioGroup, FormControl, FormLabel } from '@mui/material';
import { RadioButton } from '../Atoms/RadioButton';

export const RadioButtonFour = () => {
    return (
        <FormControl>
            <FormLabel></FormLabel>
            <RadioGroup>
                <div className="radio-button-container">
                ラジオボタン（ラベル）: 
                <RadioButton size="small" color="primary" label="ラジオボタン1" value="radio1" />
                <RadioButton size="small" color="secondary" label="ラジオボタン2" value="radio2" />
                <RadioButton size="small" color="success" label="ラジオボタン3" value="radio3" />
                <RadioButton size="small" color="error" label="ラジオボタン4" value="radio4" />
                </div>
            </RadioGroup>
        </FormControl>
    );
};
export default RadioButtonFour;