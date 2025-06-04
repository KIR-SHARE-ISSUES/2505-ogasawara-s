import TextField from '@mui/material/TextField';

type TextFieldprops = {
    label: string; // テキスト説明
    variant: "outlined" | "standard" | "filled"; // テキストボックスのスタイル
    size:  "small" | "medium"
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning"
};

export const BasicTextField = (props: TextFieldprops) => {
    return (
        <TextField label={props.label} variant={props.variant} size={props.size} color={props.color}/>
    );
};
