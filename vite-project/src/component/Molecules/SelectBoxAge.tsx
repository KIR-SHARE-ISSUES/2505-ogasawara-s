import { Box } from "@mui/material";
import { SelectBox } from "../Atoms/SelectBox";

export const SelectBoxAge = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SelectBox size="medium" color="primary" label="Age" value= "Age"/>
        </Box>
    );
};

export default SelectBoxAge;