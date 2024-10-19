import EmployeModel from "../Model/employeeModel.js";


const editEmployeeController = async (req, res) => {
    try {
        await EmployeModel.updateOne({ f_Id: req.body.f_Id }, { f_Name: req.body.f_Name, f_Email: req.body.f_Email, f_Mobile: req.body.f_Mobile, f_Designation: req.body.f_Designation, f_Gender: req.body.f_Gender, f_Course: req.body.f_Course, f_Image: req.body.f_Image })
        res.send({ message: "updated successfully" })
    } catch (e) {
        res.status(500).send({ message: "internal server error", e })
    }
}

export default editEmployeeController;
