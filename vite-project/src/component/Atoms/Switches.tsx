import Switch from '@mui/material/Switch'; /*MUI指定*/ 

type Switchprops = {
    size: "small" | "medium"
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning"
}

export const Switches = (props: Switchprops) => {
    return (
        <Switch size={props.size} color = {props.color} /> 
    );
};