const employee = require("../model/employee");
const patient = require("../model/patient");
const hospitalView = require("../view/view");
const validations = require("../validations/index");

const help = async () => {
  try {
    const help = await hospitalView.help();
    return help;
  } catch (error) {
    throw error;
  }
};

const register = async (username, password, role) => {
  try {
    if (role !== "admin" && role !== "dokter") {
      await hospitalView.wrongRole();
    } else {
      const employeeRegister = await employee.register(
        username,
        password,
        role
      );
      await hospitalView.registerView(employeeRegister);
    }
  } catch (error) {
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const isLogin = await validations.onlyOneLogin();
    if (isLogin) {
      const employeeLogin = await employee.login(username, password);

      if (employeeLogin) {
        await hospitalView.loginViewSuccess(employeeLogin);
      } else {
        await hospitalView.loginViewFailed();
      }
    } else {
      await hospitalView.noLogin();
    }
  } catch (error) {
    throw error;
  }
};

const addPatient = async (id, namaPasien, ...penyakit) => {
  try {
    const isLogin = await validations.doctorValidations();
    if (isLogin) {
      const add = await patient.add(id, namaPasien, ...penyakit);
      await hospitalView.addPatientView(add);
    } else {
      await hospitalView.notDoctor();
    }
  } catch (error) {
    throw error;
  }
};

const updatePatient = async (id, namaPasien, ...penyakit) => {
  try {
    const isLogin = await validations.doctorValidations();
    if (isLogin) {
      const update = await patient.update(id, namaPasien, ...penyakit);

      if (update) {
        await hospitalView.updatePatientViewSuccess(update);
      } else {
        await hospitalView.updatePatientViewFailed();
      }
    } else {
      await hospitalView.notDoctor();
    }
  } catch (error) {
    throw error;
  }
};

const deletePatient = async (id) => {
  try {
    const isLogin = await validations.doctorValidations();
    if (isLogin) {
      const deleted = await patient.deleted(id);

      if (deleted) {
        await hospitalView.deletePatientViewSuccess(deleted);
      } else {
        await hospitalView.deletePatientViewFailed();
      }
    } else {
      await hospitalView.notDoctor();
    }
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const employeeLogout = await employee.logout();

    if (employeeLogout !== -1) {
      await hospitalView.logoutViewSuccess();
    } else {
      await hospitalView.logoutViewFailed();
    }
  } catch (error) {
    throw error;
  }
};

const show = async (option) => {
  try {
    let data = null;
    const isLogin = await validations.doctorValidations();
    if (option === "employee") {
      data = await employee.findAll();

      await hospitalView.showSuccess(data);
    } else if (option === "patient") {
      if (isLogin) {
        data = await patient.findAll();

        await hospitalView.showSuccess(data);
      } else {
        await hospitalView.notDoctor();
      }
    } else {
      await hospitalView.showFailed(option);
    }
  } catch (error) {
    throw error;
  }
};

const findPatientBy = async (option, optionValue) => {
  try {
    const patientData = await patient.findBy(option, optionValue);

    if ((option !== "id" && option !== "name") || patientData.length < 1) {
      await hospitalView.findByFailed(option);
      console.log(option);
    } else {
      await hospitalView.findBySuccess(patientData, option);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  help,
  register,
  login,
  addPatient,
  updatePatient,
  deletePatient,
  logout,
  show,
  findPatientBy,
};
