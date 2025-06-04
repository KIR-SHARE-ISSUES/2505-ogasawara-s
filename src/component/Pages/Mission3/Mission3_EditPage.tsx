import { useNavigate } from "react-router-dom";
import Base from "../../Atoms/Base";
import { mockEdit } from "../../mock/Misson4_mockEdit";

const Mission3EditPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                {/* <h1>編集ページ</h1>
                <p>ここに編集を表示します。</p> */}
                {mockEdit.map((item) => 
                    <div key={item.id}>
                        {item.name} → {item.prise}円： {item.stock}個 : ランク{item.weeklylank}位
                    </div>)
                }
            </div>
              <Base size="medium" color="primary" onClick={() => navigate("/")}>戻る</Base>
              <Base size="medium" color="primary"> 削除 </Base>
        </>
    );
};

export default Mission3EditPage;