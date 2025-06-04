import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type CircularProps = {
    size: number
    thickness: number; // 色（任意のCSSカラー）
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning"; // 直径（px）
};

export const Circular = (props: CircularProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size={props.size} thickness={props.thickness} color={props.color} /> 
        </Box>
    );
};

export default Circular;