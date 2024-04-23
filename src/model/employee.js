const fs = require("node:fs/promises");

const findAll = async () => {
  try {
    const data = await fs.readFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/employee.json",
      { encoding: "utf-8" }
    );
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};

const register = async (username, password, role) => {
  try {
    const dbEmployee = await findAll();
    const dataEmployee = { username, password, role, login: 0 };

    dbEmployee.push(dataEmployee); // Data yang akan dimasukkan ke database JSON

    await fs.writeFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/employee.json",
      JSON.stringify(dbEmployee)
    ); // Write file ke employee.json

    return [dataEmployee, dbEmployee.length];
  } catch (error) {
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const dbEmployee = await findAll();

    // Validasi
    const isTrue = dbEmployee.filter((employee) => {
      return employee.username === username && employee.password === password;
    });

    const indexEmployee = dbEmployee.indexOf(isTrue[0]);
    if (isTrue.length > 0) dbEmployee[indexEmployee].login = 1;

    // Write file ke employee.json
    await fs.writeFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/employee.json",
      JSON.stringify(dbEmployee)
    );

    return dbEmployee[indexEmployee];
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const dbEmployee = await findAll();

    // Validasi apakah ada yang login
    const isLogin = dbEmployee.filter((employee) => {
      return employee.login === 1;
    });

    // Jika ada yang login maka ubah value login menjadi 0
    const indexEmployee = dbEmployee.indexOf(isLogin[0]);
    if (isLogin.length > 0) dbEmployee[indexEmployee].login = 0;

    // Write file ke employee.json
    await fs.writeFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/employee.json",
      JSON.stringify(dbEmployee)
    );

    return indexEmployee;
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login, logout, findAll };
