const chalk=require('chalk');
const {title}=require('./shared.js');

const facebook=chalk.hex("#0077b5")("facebook");
const github=chalk.hex("#0077b5")("Github");

const social=`

${title("Social")}
  
${facebook} : Navin praveen
${github}   : https://github.com/naveen509

`;

module.exports=social;