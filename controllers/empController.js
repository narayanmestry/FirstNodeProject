const empData = require("../models/emp");

//Create the Data
const empCreate = async (request, response) => {
  const data = new empData(request.body); // create new instance of empdata into data which come from request
  let result = await data.save(); // save this data into database
  console.log(result);
  //   response.send(result);
  response.status(200).json({ message: "Employee Created Successfully" });
};

// Get all employees List
const getEmpData = async (request, response) => {
  const data = await empData.find();
  response.send(data);
};

// Delete the Employeee
const deleteEmp = async (request, response) => {
  console.log(request.params);
  const data = await empData.deleteOne(request.params);
  //   response.send(data);
  response.status(200).json({ message: "Employee Deleted Successfully" });
};

// update Emplyoee
const updateEmp = async (request, response) => {
  const data = await empData.updateOne(request.params, {
    $set: request.body,
  });
  response.send(data);
};

// Serch Employee
const searchEmp = async (request, response) => {
  console.log(request.params.key);
  let data = await empData.find({
    $or: [
      { name: { $regex: request.params.key } },
      { role: { $regex: request.params.key } },
    ],
  });
  response.send(data);
};

const uploadFile = (request, response) => {
  response.send("File uploaded....");
};

module.exports = {
  empCreate,
  getEmpData,
  deleteEmp,
  updateEmp,
  searchEmp,
  uploadFile
};
