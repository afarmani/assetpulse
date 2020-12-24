import { writeFile } from 'fs';

const targetPath = './src/environments/environment.ts';


const envConfigFile = `export const environment = {
   alphaVantageApiKey: '${process.env.ALPHA_VANTAGE_API_KEY}',
   production: '${process.env.PRODUCTION}',
   name: '${process.env.NAME}',
};
`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});


