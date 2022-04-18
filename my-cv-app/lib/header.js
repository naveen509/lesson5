const chalk=require('chalk');
const logSymbols=require('log-symbols');

const hello=chalk.dim.underline("Hello I'm");
const name=chalk.hex("#1da1f2").inverse.bold("Naveen.S");
const mail=chalk.green("Mail");

const header =`
    ${hello} ${name}

    ${logSymbols.success} ${mail}-naveensiva19969@gmail.com




`;

module.exports=header;
// module.exports={
//     header:header
// };