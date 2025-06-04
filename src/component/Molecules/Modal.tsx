import { useState } from "react";

// モーダルはテキストの名前を変える場面が多いから、再利用しない事の方がいい。
const Modal = () => {
    // モーダルの開閉を管理する。[変数, セット関数] = useState(初期値)
    const [open, setOpen] = useState(false); 

    return (
        <>   
          {/* ボタンをクリックしたらモーダルを開く */}
            <button onClick={() => setOpen(true)}>OPEN MODAL</button> 
            {open && (
                <>
                    {/* 背景の部分。クリックした時にモーダルを閉じる */}
                    <div className="modal-overlay" onClick={() => setOpen(false)}>

                        {/* モーダルの中身 */}
                        <div className="modal-content" onClick={() => setOpen(false)}>

                        <h2>Text in a modal</h2>

                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Modal;