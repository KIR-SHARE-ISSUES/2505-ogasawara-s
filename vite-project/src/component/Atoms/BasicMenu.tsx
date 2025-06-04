import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type BasicMenuProps = {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: () => void;
    onClick: () => void;
    label: string;
}

export const BasicMenu = (props: BasicMenuProps) => {
    return (
        <Menu
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.onClose}
        >
            <MenuItem onClick={props.onClick}>{props.label}</MenuItem>
        </Menu>
    );
};