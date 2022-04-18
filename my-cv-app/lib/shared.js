const chalk = require("chalk");

const title=(text)=>{
    return chalk.hex("#9146ff").inverse.bold(text);
};

module.exports={
    title,
};