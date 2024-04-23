const employee = require("../model/employee");
const patient = require("../model/patient");
const hospitalView = require("../view/view");

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
    const employeeRegister = await employee.register(username, password, role);
    await hospitalView.registerView(employeeRegister);
  } catch (error) {
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const employeeLogin = await employee.login(username, password);

    if (employeeLogin) {
      await hospitalView.loginViewSuccess(employeeLogin);
    } else {
      await hospitalView.loginViewFailed();
    }
  } catch (error) {
    throw error;
  }
};

const addPatient = async (id, namaPasien, ...penyakit) => {
  try {
    const add = await patient.add(id, namaPasien, ...penyakit);
    await hospitalView.addPatientView(add);
  } catch (error) {
    throw error;
  }
};

const updatePatient = async (id, namaPasien, ...penyakit) => {
  try {
    const update = await patient.update(id, namaPasien, ...penyakit);

    if (update) {
      await hospitalView.updatePatientViewSuccess(update);
    } else {
      await hospitalView.updatePatientViewFailed();
    }
  } catch (error) {
    throw error;
  }
};

const deletePatient = async (id) => {
  try {
    const deleted = await patient.deleted(id);

    if (deleted) {
      await hospitalView.deletePatientViewSuccess(deleted);
    } else {
      await hospitalView.deletePatientViewFailed();
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

    if (option === "employee") {
      data = await employee.findAll();

      await hospitalView.showSuccess(data);
    } else if (option === "patient") {
      data = await patient.findAll();

      await hospitalView.showSuccess(data);
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
