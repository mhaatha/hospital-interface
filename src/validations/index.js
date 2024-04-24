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

const onlyOneLogin = async () => {
  try {
    const employeeDb = await employeeModel.findAll();

    // Filter apakah ada yang login
    const isLogin = employeeDb.some((employee) => {
      return employee.login === 1;
    });

    if (isLogin) return false;

    return true;
  } catch (error) {}
};

const onlyAdmin = async () => {
  try {
    const employeeDb = await employeeModel.findAll();

    // Filter apakah ada yang login
    const isLogin = employeeDb.filter((employee) => {
      return employee.login === 1;
    });

    // Buat index lalu validasi apakah user tersebut admin
    if (isLogin.length > 0) {
      const indexEmployee = employeeDb.indexOf(isLogin[0]);
      if (employeeDb[indexEmployee].role === "admin") return true;

      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { doctorValidations, onlyOneLogin, onlyAdmin };
