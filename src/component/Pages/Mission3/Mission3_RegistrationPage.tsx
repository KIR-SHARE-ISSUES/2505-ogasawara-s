import { useNavigate } from "react-router-dom";
import Base from "../../Atoms/Base";
import { BasicTextField } from "../../Atoms/BasicTextField";
import { SelectBox } from "../../Atoms/SelectBox";

const Mission3RegistrationPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="newRegistration-container">
                <div className="registration-name">
                  <BasicTextField label="苗字" variant="standard" size="small" color="secondary"/>
                  <BasicTextField label="名前" variant="standard" size="small" color="secondary"/>
                </div>
                <div className="registration-kana">
                  <BasicTextField label="苗字カナ" variant="outlined" size="small" color="primary"/>
                  <BasicTextField label="名前カナ" variant="outlined" size="small" color="primary"/>
                </div>
                <div className="registration-mail">
                  <BasicTextField label="メールアドレス" variant="filled" size="small" color="info"/>
                </div>
                <div className="registration-age">
                  <SelectBox size="medium" color="primary" label="Age" value= "Age" />
                </div>
                <div className="registration-password">
                  <BasicTextField label="パスワード" variant="filled" size="small" color="info"/>
                </div>
                <div className="registration-login">
                  <Base size="medium" color="success">LOG IN</Base>
                </div>
            </div>
              <Base size="medium" color="primary" onClick={() => navigate("/")}>戻る</Base>
        </>
    );
};

export default Mission3RegistrationPage;    