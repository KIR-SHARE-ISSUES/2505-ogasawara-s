import {BasicTextField} from "../Atoms/BasicTextField";

export const TextFieldThree = () => {
    return (
        <>
            <BasicTextField  label="outlined" variant="outlined" size="small" color="secondary"/>
            <BasicTextField label="filled" variant="filled" size="small" color="primary"/>
            <BasicTextField label="standard" variant="standard" size="small" color="info"/>
        </>
    );
};

export default TextFieldThree;