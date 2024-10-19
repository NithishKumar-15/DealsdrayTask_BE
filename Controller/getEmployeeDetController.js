import EmployeModel from "../Model/employeeModel.js";

const getEmployeeDetController = async (req, res) => {
    try {
        const data = await EmployeModel.find().select({ _id: 0, f_Password: 0 });
        res.send({ message: "data get success", data })
    } catch (e) {
        res.status(500).send({ message: "internal server error", e })
    }
}

export default getEmployeeDetController;