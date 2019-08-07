var test = require('tape');
var getData = require('../src/queries/getData');
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");

tape("tape is working", t => {
t.equals(1, 1, "one equals one");
t.end();
});

tape('Test your catagories table', (t)=> {
runDbBuild(function(err, res){
if(err){
console.log(err);
}else{
getData((err,result)=>{
if(err){
console.log(err);
}else{
let actual = JSON.parse(JSON.stringify(result));
var catagoriesTest={id:1,name:'popular',id:2,name:'meeting',id:3,name:'workshop',id:4,name:'presentation'};
t.deepEqual(actual[0], catagoriesTest, 'Return the catagories table');

}
}) 
t.end(); 
}
})
});
