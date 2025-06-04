import { Box,InputLabel,Select,MenuItem} from "@mui/material";

type SelectBoxprops = {
    size: "small" | "medium"
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning"
    label: string /*ラベルテキスト */
    value: string /*選択中の値 */
}

export const SelectBox = (props: SelectBoxprops) => {
    return (
        <Box sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel> 
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.value}
                size={props.size}
                color={props.color}
            > 
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </Box>
    );
};
