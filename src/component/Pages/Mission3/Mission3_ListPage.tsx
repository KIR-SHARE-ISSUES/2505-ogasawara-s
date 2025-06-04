import { useNavigate } from "react-router-dom";
import Base from "../../Atoms/Base";
import BasicTable from "../../Molecules/BasicTable";
import Mission2SearchPagefrom from "../Mission2/Mission2_SearchPage";


// テーブルに表示するダミーデータ
const dammyData = [
    {id:1, name:"A", prise:2000, stock:111 },
    {id:2, name:"B", prise:3000, stock:222 },
    {id:3, name:"C", prise:4000, stock:333 },
    {id:4, name:"D", prise:5000, stock:444 },
]

const Mission3ListPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="registration-container">
              <div className="registration-button">
              <Base size="medium" color="primary" onClick={() => navigate("/registration")}>新規登録</Base>
              </div>
            </div>
            
            <Mission2SearchPagefrom /> 
            
            <div>
            <BasicTable data = {dammyData} checkBox = {true}/>
            </div>

        </div>
    );
};

export default Mission3ListPage;
