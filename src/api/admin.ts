import exp from "constants";
import { sendGet,sendPost,sendDelete,sendPut } from "./axios";
import { CURRENT_URL } from "../util/constant";


//
export const logIn = (payload:any)=> sendPost("http://localhost:8080/loginOperator",payload);
export const getListPatient = ()=>sendGet("http://localhost:8080/patient");
export const getPatientDetail = (payload:any) =>sendGet(`http://localhost:8080/patient/detail?idPatient=${payload}`)
export const getListOperator = ()=>sendGet("http://localhost:8080/users");
export const getOperatorDetail = (payload:any)=> sendGet(`http://localhost:8080/operatorDetail?phoneNumber=${payload}`)
export const insertOperator = (payload:any)=>sendPost("http://localhost:8080/registerOperator",payload);
export const updateOperator = (payload:any) =>sendPost("http://localhost:8080/updateAccount",payload);
//calendar
export const getCalendarPatient = (payload:any)=>sendGet(`http://localhost:8080/exams/patient?controlDate=${payload}`);
export const getCalendarDental = (payload:any)=>sendGet(`http://localhost:8080/exams/dental?controlDate=${payload}`);
export const getOperatorName =()=>sendGet("http://localhost:8080/users");
export const getPatientName = ()=>sendGet("http://localhost:8080/patient");
export const insertCalendarDental = (payload:any)=>sendPost("http://localhost:8080/exams/insert",payload);
export const getCalendarDetail =(payload:any)=>sendGet(`http://localhost:8080/exams/detail?idExam=${payload}`);
export const updateExam =(payload:any) =>sendPost("http://localhost:8080/updateExam",payload);
export const deleteCalendar = (payload:any)=>sendPost(`http://localhost:8080/exams/deletedexam?idExam=${payload}`);
export const getHistoryPatient = (payload:any)=>sendGet(`http://localhost:8080/exams/history?idPatient=${payload}`);
export const getHistoryPatientMedicine = (payload:any)=>sendGet(`http://localhost:8080/exams/medicine?idExam=${payload}`)
export const autoUpdate = ()=> sendPost(`http://localhost:8080/exams/autoUpdate`);
//medicine 
export const getListMedicine = ()=>sendGet("http://localhost:8080/medicine");
export const getMedicineDetail = (payload:any)=> sendGet(`http://localhost:8080/medicine/detail?idMedicine=${payload}`);
export const insertMedicine = (payload:any)=>sendPost("localhost:8080/medicine");
export const updateMedicine = (id:any,payload:any)=> sendPut(`http://localhost:8080/medicine/update?idMedicine=${id}`,payload);
export const deleteMedicine = (payload:any) =>sendPost(`http://localhost:8080/medicine/delete?idMedicine=${payload}`);
//medicineListExam
export const getListMedicineExam =(payload:any)=> sendGet(`http://localhost:8080/exams/medicine?idExam=${payload}`)
export const addListMedicineExam = (payload:any)=>sendPost(`http://localhost:8080/exams/insertMedicine`,payload);
export const deleteListMedicineExam = (payload:any)=>sendPost(`http://localhost:8080/exams/deleteMedicine`,payload);
//noti
export const getNoti = (payload:any)=>sendGet(`http://localhost:8080/exams/noti/dentist?idOperator=${payload}`)
export const getIdOperator = (payload:any)=> sendGet(`http://localhost:8080/exams/idOperator?operatorName=${payload}`);
// export const logIn = (payload:any) =>sendPost(`${CURRENT_URL}/loginOperator`);