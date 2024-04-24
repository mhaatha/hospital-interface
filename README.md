# Hospital Interface JSON as Database (CLI)
Hospital Interface is a simple project for managing employee and patient data in a hospital. This project uses the JavaScript language with NodeJS as the runtime and the database uses JSON format.

## Description
This project aims to provide a simple user interface for managing hospital data, including employee and patient data. This user interface allows users to add, change, search, and delete employee and patient data. Data is stored in JSON format for ease of storage and processing.

## Features 
- Add new employees with basic information such as username, password and position.
- Employees can log in if they have registered.
- Employees with the 'dokter' role can:
  - Add patients by entering data such as ID, patient name and disease.
  - Edit or update patient data with ID, patient name and new disease.
  - Delete patient data based on patient ID.
  - View all patient data or search for patient data based on ID.
- Employees with the 'admin' role can:
  - View data for all employees.
- Employees can log out if they already log in.
- If an employee logs in, other employees cannot log in.

## Prerequisite
Make sure you have installed the prerequisite below on your computer:
- Node.js - [(Download & Install Node.js)](https://nodejs.org/en/download) to run the project.

## Installation
- Clone this repository:

   ```
   https://github.com/mhaatha/hospital-interface.git
   cd /hospital-interface/src
   ```

## Usage
- Run the application to see the available commands:

   ```
   node index.js
   ```

