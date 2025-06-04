// 「○」の形のラジオボタン本体＆ラジオボタンのテキスト
import { Radio,FormControlLabel } from '@mui/material';

type RadioButtonprops = {
    size: "small" | "medium" ; 
    /*MUIが提供する色バリエーションから選択可能 */
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    // ラジオボタンに表示されるテキスト
    label: string;
    // ラジオボタンの値
    value: string;
}

export const RadioButton = (props: RadioButtonprops) => {
    return (
        <FormControlLabel
            value={props.value}
            control={<Radio size={props.size} color = {props.color} />}
            label={props.label}
        />
    );
};