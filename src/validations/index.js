const employeeModel = require("../model/employee");

const doctorValidations = async () => {
  try {
    const employeeDb = await employeeModel.findAll();

    // Filter apakah ada yang login
    const isLogin = employeeDb.filter((employee) => {
      return employee.login === 1;
    });

    // Buat index lalu validasi apakah user tersebut dokter
    if (isLogin.length > 0) {
      const indexEmployee = employeeDb.indexOf(isLogin[0]);
      if (employeeDb[indexEmployee].role === "dokter") return true;
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { doctorValidations };
