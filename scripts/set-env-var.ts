const fs = require('fs')

const envVarFile = "./env-var.ts"

const envVar = `
export const ENV = {
    WEATHER_API: ""
}
`;

fs.writeFile(envVarFile, envVar, function (err) {
    if (err) {
       console.log(err);
    }   console.log(`Wrote variables to envVarFile`);
 });