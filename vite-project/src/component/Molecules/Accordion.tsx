import { useState } from "react";

const Accordion = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
          <div className="accordion">
            
             {/* タイトルやクリック部分 */}
            <div className="accordion-header" onClick={() => setOpen(!open)}>
                Accordion1
            </div>
                
                {open && (  
                    <div className="accordion-content"> {/* 中身（開閉できる） */}
                        content
                    </div>
                )}

          </div>
        </>
    );
};

export default Accordion;