import EmployeModel from "../Model/employeeModel.js";

const deleteEmployeeController = async (req, res) => {
    try {

        await EmployeModel.deleteOne({ f_Id: req.headers.id });
        res.send({ message: "data deleted success" })
    } catch (e) {
        res.status(500).send({ message: "internal server error", e })
    }
}

export default deleteEmployeeController;