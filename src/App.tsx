import './App.scss'
// import ButtonThree from './component/Molecules/ButtonThree'
// import CheckBoxThree from './component/Molecules/CheckBoxThree';
// import RadioButtonFour from './component/Molecules/RadioButtonFour';
// import SelectBoxAge from './component/Molecules/SelectBoxAge';
// import SwitchesThree from './component/Molecules/SwitchesThree';
// import TextFieldThree from './component/Molecules/TextFieldThree';
// import ToolTipOut from './component/Molecules/ToolTipOut';
// import BasicTable from './component/Molecules/BasicTable';
// import RoundedPagination from './component/Molecules/RoundedPagination'; 
// import Modal from './component/Molecules/Modal'; 
// import Dialog from './component/Molecules/Dialog';
// import Accordion from './component/Molecules/Accordion';
// import Card from './component/Molecules/Card';
// import CircularTwo from './component/Molecules/CircularTwo';
// import MenuBasic from './component/Molecules/MenuBasic';
// import Mission2SearchPage from './component/Pages/Mission2/Mission2_SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mission3ListPage from './component/Pages/Mission3/Mission3_ListPage';
import Mission3DetailsPage from './component/Pages/Mission3/Mission3_DetailsPage';
import Mission3EditPage from './component/Pages/Mission3/Mission3_EditPage';
import Mission3RegistrationPage from './component/Pages/Mission3/Mission3_RegistrationPage';
// const tableDate = [
//     {id:1, name:"A", age:20, phoneNumber:111 },
//     {id:2, name:"B", age:21, phoneNumber:222 },
//     {id:3, name:"C", age:22, phoneNumber:333 },
//     {id:4, name:"D", age:23, phoneNumber:444 },
//     {id:5, name:"E", age:24, phoneNumber:555 },
// ];

function App() {

  return (
    <>
      {/* <ButtonThree /> */}
      {/* <CheckBoxThree /> */}
      {/* <RadioButtonFour />
      <SelectBoxAge />
      <SwitchesThree />
      <TextFieldThree />
      <ToolTipOut />
      <BasicTable data = {tableDate} />
      <RoundedPagination />
      <Modal />
      <Dialog />
      <Accordion />
      <Card />
      <CircularTwo />
      <MenuBasic /> */}
      {/* <Mission2SearchPage /> */}
      <BrowserRouter>
        <Routes>
         
        <Route path="/" element={<Mission3ListPage />} />   {/* 一覧ページ */}
        <Route path = "/registration" element= {<Mission3RegistrationPage />} /> {/* 新規登録ページ*/}
        <Route path="/details" element={<Mission3DetailsPage />} />  {/* 詳細ページ*/}
        <Route path="/edit" element={<Mission3EditPage />} /> {/* 編集ページ*/}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
