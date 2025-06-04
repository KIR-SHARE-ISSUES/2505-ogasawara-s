import { useState } from "react";

const Dialog = () => {
    // モーダルの開閉を管理する。[変数, セット関数] = useState(初期値)
    const [open, setOpen] = useState(false); 

    return (
        <>   
          {/* ボタンをクリックしたらモーダルを開く */}
            <button onClick={() => setOpen(true)}>OPEN ALERT DIALOG</button> 
            {open && (  
                <>
                    {/* 背景の部分。クリックした時にモーダルを閉じる */}
                    <div className="modal-overlay2" onClick={() => setOpen(false)}>

                        {/* モーダルの中身 */}
                        <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
                        <h2>Use Google's location service?</h2>

                            <div className="button-container">
                            <button className="disagree-button" onClick={() => setOpen(false)}>DISAGREE</button>
                            <button className="agree-button" onClick={() => setOpen(false)}>AGREE</button>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Dialog;