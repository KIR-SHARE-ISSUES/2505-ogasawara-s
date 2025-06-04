import { useState } from "react";
import  { Menu, MenuItem }from "@mui/material"; 
import Base from '../Atoms/Base'; // 作成済みのボタン利用

export const MenuBasic = () => {
    // メニューの開閉を管理する
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //アンカーエレメント→HTMLに要素をいれるかどうか
    const open = Boolean(anchorEl); // openは開くかどうか。アンカーがnull→false, それ以外→true
    
    // ボタンクリック時の処理を定義
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { // eventはクリックイベントの情報を持ってる。
        setAnchorEl(event.currentTarget); //curentTargetはクリックされた要素(=ボタンそのもの)、メニューを開く設定にする。
    };
    const handleClose = () => {
        setAnchorEl(null); // メニューを閉じる状態にする。
    };

return (
    <>
        <Base size="small" color="primary" onClick={handleClick}>
        DASH BOARD
        </Base>
        <Menu
        anchorEl={anchorEl} //メニューの表示位置を指定
        open={open} //メニューが開いている事を判定
        onClose={handleClose} // メニューの外クリックや閉じる操作があった時の処理を設定。
        >
        <MenuItem onClick={handleClose}>Profiel</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </>
);
}

export default MenuBasic;