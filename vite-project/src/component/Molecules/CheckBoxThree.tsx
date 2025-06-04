import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const CheckBoxThree = () => {
    return (
        <div className="checkbox-container"> 
        <FormGroup  row> 
            チェックボックス（ラベル）：
            <FormControlLabel control={<Checkbox size = "small" color="primary" />} label="ボックス1" />
            <FormControlLabel control={<Checkbox size = "small" color="secondary"/>} label="ボックス2" />
            <FormControlLabel control={<Checkbox size = "small" color="success"/>} label="ボックス3"  />
        </FormGroup>
        </div>
    );
};

export default CheckBoxThree;