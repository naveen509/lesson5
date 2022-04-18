const Table = require('cli-table');
const {title}=require('./shared.js');

// instantiate
const table = new Table({
    head: ['#', 'Projects']
   
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['1', 'School Old boys Association System']
  , ['2', 'Student Management System']
);

// console.log(table.toString());

const myProjects=`

${title("Recent Projects")}

    ${table.toString()}

`;
module.exports=myProjects;