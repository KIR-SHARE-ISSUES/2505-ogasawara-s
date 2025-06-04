// Material UI（MUI）のButtonコンポーネントをインポート
import Button from '@mui/material/Button';
import type React from 'react';

type baseButtonProps = {
    size: "small" | "medium" | "large" ; 
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    onClick?: (event : React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode /*MUIが提供する色バリエーションから選択可能 */
}


const Base = (props: baseButtonProps) => {
    return (
        <>
            <Button size = {props.size} color = {props.color} onClick={props.onClick} children = {props.children} /> 
        </>
    );
};

export default Base;

