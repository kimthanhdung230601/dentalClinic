import { Route, Routes } from "react-router-dom";
import Home from "../page/dentist/home";
import PersonalCalendar from "../page/dentist/personnalCalendar";
import User from "../page/dentist/user";
import SurgeryCalendar from "../page/dentist/surgeryCalendar";
import Patients from "../page/dentist/patient";
import Medicine from "../page/dentist/medicine";
import PatientDetail from "../page/dentist/patientDetail";
import ExamInfor from "../page/dentist/medicalExamInfor";
import ReExamination from "../page/dentist/reExamInfor";
import LogIn from "../page/dentist/log";
import DentalList from "../page/dentist/dentalList";
import YourComponent from "../page/example";
const Wrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PersonalCalendar />} />
          <Route path={`/patient/examinationInfor/:idExam/:idPatient`} element={<ExamInfor/>}/>
          <Route path="/patient/reExamination/:idPatient/:idOperator" element ={<ReExamination/>}/>
          <Route path="/user" element={<User />} />
          <Route path="/surgeryCalendar" element={<SurgeryCalendar />} />
          <Route path="/patients" element={<Patients />} />
          <Route path={`/patients/detail/:idPatient`} element={<PatientDetail/>} />
          <Route path="/dentailList" element={<DentalList/>} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/ex" element={<YourComponent/>}/>
        </Route>
        <Route  path="/logout" element={<LogIn/>}/>
        <Route path="/admiin/" element={<Home />}>
          <Route index element={<PersonalCalendar />} />
          <Route path="/admiin/patient/examinationInfor" element={<ExamInfor/>}/>
          <Route path="/admiin/patient/reExamination" element ={<ReExamination/>}/>
          <Route path="/admiin/user" element={<User />} />
          <Route path="/admiin/surgeryCalendar" element={<SurgeryCalendar />} />
          <Route path="/admiin/patients" element={<Patients />} />
          <Route path="/admiin/patients/detail" element={<PatientDetail/>} />
          <Route path="/admiin/medicine" element={<Medicine />} />
        </Route>
        <Route  path="/admiin/logout" element={<LogIn/>}/>
      </Routes>
    </>
  );
};

export default Wrapper;
