import { Checkbox, FormControlLabel } from "@mui/material";

type CheckBoxprops = {
    size: "small" | "medium" | "large" ; 
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    label: string
};

const CheckBox = ({ size, color, label }: CheckBoxprops) => {
    return (
        <FormControlLabel
            control={<Checkbox size={size} color={color} />} //中のフォーム要素を指定
            label={label}
        /> //フォームコントロールはラベル＋フォーム部品を1セットで扱う。
           // チェックボックス自体がラベルを使用できない。
    )
}

export default CheckBox;
