const fs = require('fs')

const envVarFile = "./env-var.ts"
const dotEnvFile = "./.env"

//env variables for front end development
const envVar = `
export const ENV = {
    WEATHER_API_KEY: "",
    GOOGLEMAPS_API_KEY: ""
}
`;

//env variables for back end development
const dotEnv = `
DB_URI = ""
TOKEN_SECRET = ""
`;

fs.writeFile(envVarFile, envVar, function (err) {
    if (err) {
       console.log(err);
    }   console.log('Wrote empty variables to:', envVarFile);
 });

 fs.writeFile(dotEnvFile, dotEnv, function (err) {
    if (err) {
       console.log(err);
    }   console.log('Wrote empty variables to:', dotEnvFile);
 });