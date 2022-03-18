let cp=require('child_process');
//console.log(cp);

cp.execSync("calc");

// executing another file using child process.

let content = cp.execSync("node object.js");

console.log(""+content);
