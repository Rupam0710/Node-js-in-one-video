const fs = require("node:fs");

// finished reading is print first
// file data is read second
// the processor keeps on working until file is read and ready for print so its print is last

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data);
})
console.log("finished reading file");

fs.writeFile('file2.txt',"This is my second file",()=>{
    console.log('written to file 2');
})
console.log("finished reading file");



// file data is read first
// finished reading is print second
// the processor intentionally blocks other data until file is read and print
const a = fs.readFileSync("file.txt");
console.log(a.toString());

console.log("finished reading file");

const b  = fs.writeFileSync('file3.txt',"This is my third file");
console.log(b);
console.log("finished reading file");