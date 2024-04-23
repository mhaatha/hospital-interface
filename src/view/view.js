const help = async () => {
  try {
    console.log(`
    > node index.js register <username> <password> <jabatan> 
    > node index.js login <username> <password>
    > node index.js addPatient <id> <namaPasien> <penyakit1> <penyakit2> ....
    > node index.js updatePatient <id> <namaPasien> <penyakit1> <penyakit2> ....
    > node index.js deletePatient <id>
    > node index.js logout
    > node index.js show <employee/patient> 
    > node index.js findPatientBy: <name/id> <namePatient/idPatient>
    `);
  } catch (error) {
    throw error;
  }
};

const registerView = async (objArr) => {
  try {
    console.log(`
    Save data success. 
    username: ${objArr[0].username}
    role: ${objArr[0].role}
    Total employee: ${objArr[1]}`);
  } catch (error) {
    throw error;
  }
};

const loginViewSuccess = async (objArr) => {
  try {
    console.log(`
    Login success.
    username: ${objArr.username}
    role: ${objArr.role}
    `);
  } catch (error) {
    throw error;
  }
};

const loginViewFailed = async () => {
  try {
    console.log("Username or password is wrong.");
  } catch (error) {
    throw error;
  }
};

const addPatientView = async (objArr) => {
  try {
    console.log(`
    Patient added successfully.
    id: ${objArr[0].id}
    nama pasien: ${objArr[0].namaPasien}
    penyakit: ${objArr[0].penyakit} 
    Total pasien: ${objArr[1]}   
    `);
  } catch (error) {
    throw error;
  }
};

const updatePatientViewSuccess = async (objArr) => {
  try {
    console.log(`
    Patient has been updated.
    new data: 
    id: ${objArr.id}
    nama pasien: ${objArr.namaPasien}
    penyakit: ${objArr.penyakit}
    `);
  } catch (error) {
    throw error;
  }
};

const updatePatientViewFailed = async () => {
  try {
    console.log("Patient id is not found.");
  } catch (error) {
    throw error;
  }
};

const deletePatientViewSuccess = async (objArr) => {
  try {
    console.log(`
    Patient deleted successfully.
    data deleted:
    id: ${objArr.id}
    nama pasien: ${objArr.namaPasien}
    penyakit: ${objArr.penyakit}
    `);
  } catch (error) {
    throw error;
  }
};

const deletePatientViewFailed = async () => {
  try {
    console.log("Patient id is not found.");
  } catch (error) {
    throw error;
  }
};

const logoutViewSuccess = async () => {
  try {
    console.log("Logout success.");
  } catch (error) {
    throw error;
  }
};

const logoutViewFailed = async () => {
  try {
    console.log("You are not login.");
  } catch (error) {
    throw error;
  }
};

const showSuccess = async (objArr) => {
  try {
    console.log(objArr);
  } catch (error) {
    throw error;
  }
};

const showFailed = async (option) => {
  try {
    console.log(`There's no data in ${option}`);
  } catch (error) {
    throw error;
  }
};

const findBySuccess = async (objArr, option) => {
  try {
    console.log(`
    Find patient by ${option} success.
    data: 
    id: ${objArr[0].id}
    nama pasien: ${objArr[0].namaPasien}
    penyakit: ${objArr[0].penyakit}
    `);
  } catch (error) {
    throw error;
  }
};

const findByFailed = async (option) => {
  try {
    console.log(
      `Error: name or id is not found or ${option} is not recognized.`
    );
  } catch (error) {
    throw error;
  }
};

const notDoctor = async () => {
  try {
    console.log("You are not doctor.");
  } catch (error) {
    throw error;
  }
};

const wrongRole = async () => {
  try {
    console.log("Role only admin and dokter");
  } catch (error) {
    throw error;
  }
};

const noLogin = async () => {
  try {
    console.log('You already login, please logout first.');
  } catch (error) {
    throw error;
  }
}

module.exports = {
  help,
  registerView,
  loginViewSuccess,
  loginViewFailed,
  addPatientView,
  updatePatientViewSuccess,
  updatePatientViewFailed,
  deletePatientViewSuccess,
  deletePatientViewFailed,
  logoutViewSuccess,
  logoutViewFailed,
  showSuccess,
  showFailed,
  findBySuccess,
  findByFailed,
  notDoctor,
  wrongRole,
  noLogin
};
