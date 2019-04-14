var fs = require("fs"); /* loading the fs module to the application */

var data = fs.readFileSync('Departments.json','utf8'); /* Reading the Departments JSON file */

var dispData = JSON.stringify(data);  /* Converting the JSON file to string*/
console.log(dispData)
