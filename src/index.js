const command = process.argv[2];
const argument = process.argv.slice(3);
const hospitalController = require("./controller/controller");

switch (command) {
  case "register":
    hospitalController.register(argument[0], argument[1], argument[2]);
    break;

  case "login":
    hospitalController.login(argument[0], argument[1]);
    break;

  case "addPatient":
    hospitalController.addPatient(
      argument[0],
      argument[1],
      ...argument.slice(2)
    );
    break;

  case "updatePatient":
    hospitalController.updatePatient(
      argument[0],
      argument[1],
      ...argument.slice(2)
    );
    break;

  case "deletePatient":
    hospitalController.deletePatient(argument[0]);
    break;

  case "logout":
    hospitalController.logout();
    break;

  case "show":
    hospitalController.show(argument[0]);
    break;

  case "findPatientBy":
    hospitalController.findPatientBy(argument[0], argument[1]);
    break;

  default:
    hospitalController.help();
    break;
}
