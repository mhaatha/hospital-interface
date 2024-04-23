const fs = require("node:fs/promises");

const findAll = async () => {
  try {
    const data = await fs.readFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/patient.json",
      { encoding: "utf-8" }
    );
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};

const add = async (id, namaPasien, ...penyakit) => {
  try {
    const patientDb = await findAll();
    const dataPatient = { id, namaPasien, penyakit };

    patientDb.push(dataPatient); // Data yang akan dimasukkan ke database JSON

    await fs.writeFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/patient.json",
      JSON.stringify(patientDb)
    ); // Write file ke patient.json

    return [dataPatient, patientDb.length];
  } catch (error) {
    throw error;
  }
};

const update = async (id, namaPasien, ...penyakit) => {
  try {
    const patientDb = await findAll();
    const dataPatient = { id, namaPasien, penyakit };

    // Validasi apakah pasien ada
    const isExist = patientDb.filter((patient) => {
      return patient.id === id;
    });

    // Ubah data pada indeks yang dituju
    const patientId = patientDb.indexOf(isExist[0]);
    if (isExist.length > 0) patientDb[patientId] = dataPatient;

    // Write file ke patient.json
    await fs.writeFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/patient.json",
      JSON.stringify(patientDb)
    );

    return patientDb[patientId];
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const patientDb = await findAll();
    const deletedData = [...patientDb];

    // Validasi apakah ada patient dengan id yang dituju
    const isExist = patientDb.filter((patient) => {
      return patient.id === id;
    });

    // Cari index nya lalu hapus
    const patientId = patientDb.indexOf(isExist[0]);
    if (isExist.length > 0) patientDb.splice(patientId, 1);

    // Write file ke patient.json
    await fs.writeFile(
      "/home/mhaathaya/Belajar/project/hospital-interface/src/database/patient.json",
      JSON.stringify(patientDb)
    );

    return deletedData[patientId];
  } catch (error) {
    throw error;
  }
};

const findBy = async (option, optionValue) => {
  try {
    const patientDb = await findAll();

    if (option === "name") option = "namaPasien";

    // Tentukan dulu id atau nama. Jika sudah filter menggunakan patientDb.option
    const isExist = patientDb.filter((patient) => {
      return patient[option] === optionValue;
    });

    return isExist;
  } catch (error) {
    throw error;
  }
};

module.exports = { add, update, deleted, findAll, findBy };
