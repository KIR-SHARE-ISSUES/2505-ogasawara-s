import CheckBoxThree from "../../Molecules/CheckBoxThree";
import RadioButtonFour from "../../Molecules/RadioButtonFour";
import { BasicTextField } from "../../Atoms/BasicTextField";
import Base from "../../Atoms/Base";
// import Misson2_Header from "../../Organisms/Mission2_Header";

const Mission2SearchPage = () => {
    return (
        <>   
            {/* <Misson2_Header />
            
            <div className="search-container"> */}
            <CheckBoxThree />
            <RadioButtonFour />

            <div className="text-field-container">
                テキストフィールド（ラベル）: 
                <BasicTextField label="outlined" variant="outlined" size="small" color="secondary"/>
            </div>

            <div className="button-container">
                <Base size="small" color="primary">
                条件クリア
                </Base>
                <Base size="small" color="primary">
                検索
                </Base>
            </div>

            {/* </div> */}
        </>
    );
}

export default Mission2SearchPage;