import { useNavigate } from "react-router-dom";
import Base from "../../Atoms/Base";
import mockData from "../../mock/Mission4_mockDetails.tsx";

const Mission3DetailsPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                {/* <h1>詳細ページ</h1>
                <p>ここに詳細を表示します。</p> */}
                <ul>
                    {mockData.map((item) => 
                    <li key={item.id}>
                        {item.name} → {item.prise}円： {item.stock}個売れてます！ ランク{item.weeklylank}位
                    </li>)}
                </ul>
            </div>
              <Base size="medium" color="primary" onClick={() => navigate("/")}>戻る</Base>
              <Base size="medium" color="primary"> 削除 </Base>
        </>
    );
};

export default Mission3DetailsPage;