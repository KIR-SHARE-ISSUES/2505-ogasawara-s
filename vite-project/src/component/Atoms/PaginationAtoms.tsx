import { Pagination, Stack } from '@mui/material';

// 型を作成
type Paginationprops = {
    count: number;
    shape: "rounded";
    variant?: "outlined";
}


export const PaginationAtoms = (props: Paginationprops) => {
    return (
        <Stack spacing={2}>
            <Pagination count={props.count} // 10ページ表示させたいから外部のpagesの長さで取得
                        shape={props.shape} 
                        // ２つめのページネーションにだvariantのoutlinedを付け足す
                        {...(props.variant? {variant: props.variant} : {})} 
            />
        </Stack>
    );
};