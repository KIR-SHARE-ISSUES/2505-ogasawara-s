import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// プロップス
type ToolTipProps = {
    label: string;
    onClick: () => void;
};

export const ToolTip = (props: ToolTipProps) => {
    return (
        <Tooltip title={props.label}>
            <IconButton onClick={props.onClick}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
};