const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
  });

  tape('what you are going to test', (t)=> {
    runDbBuild(function(err, res){
     if(err){
        console.log(err);
     }else{
        getData.getData((err,result)=>{
            if(err){
                console.log(err);
            }else{
                let actual = JSON.parse(JSON.stringify(result));
                let expected =[{id: 1, name: "team meetup", description: "will be talking about the new project", eventdate: "2019-08-14T21:00:00.000Z", interested: 0 ,  category: 'meeting', location: 'telaviv'}
                    ,{id: 2, name: "happy hour", description: "free beer and snacks", eventdate: "2019-09-22T21:00:00.000Z", interested: 0,  category: 'activity', location: 'nazareth'}
                    ,{id: 3, name: "node.js", description: "getting to know node.js better", eventdate: "2019-09-17T21:00:00.000Z", interested: 0 ,  category: 'research', location: 'smea'}
                    ,{id: 4, name: "present weekly projects", description: "please bring your laptops to cast", eventdate: "2019-10-08T21:00:00.000Z", interested: 0 ,  category: 'presentation', location: 'harutzim'}
                    ,{id: 5, name: "react", description: "hands-on react tutorial", eventdate: "2019-10-11T21:00:00.000Z", interested: 0 ,  category: 'workshop', location: 'haifa'}];
                                    

            
                t.deepEqual(actual, expected, 'Return the first query');
                
            }
        }) 
        t.end();       
     }
    })
  });

  tape('what you are going to test', (t)=> {
    runDbBuild(function(err, res){
     if(err){
        console.log(err);
     }else{
        postData('STG','stop go continue',"2019-10-11T21:00:00.000Z",0,'meeting','karibim',(err,result)=>{
            if(err){
                console.log(err);
            }else{
                getData.getData((err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        let actual = JSON.parse(JSON.stringify(result));
                        let expected =[{id: 1, name: "team meetup", description: "will be talking about the new project", eventdate: "2019-08-14T21:00:00.000Z", interested: 0 ,  category: 'meeting', location: 'telaviv'}
                        ,{id: 2, name: "happy hour", description: "free beer and snacks", eventdate: "2019-09-22T21:00:00.000Z", interested: 0,  category: 'activity', location: 'nazareth'}
                        ,{id: 3, name: "node.js", description: "getting to know node.js better", eventdate: "2019-09-17T21:00:00.000Z", interested: 0 ,  category: 'research', location: 'smea'}
                        ,{id: 4, name: "present weekly projects", description: "please bring your laptops to cast", eventdate: "2019-10-08T21:00:00.000Z", interested: 0 ,  category: 'presentation', location: 'harutzim'}
                        ,{id: 5, name: "react", description: "hands-on react tutorial", eventdate: "2019-10-11T21:00:00.000Z", interested: 0 ,  category: 'workshop', location: 'haifa'},
                         {id: 6, name: "STG", description: "stop go continue", eventdate: "2019-10-10T21:00:00.000Z", interested: 0 ,  category: 'meeting', location: 'karibim'}];
                                        
    
                        t.deepEqual(actual, expected, 'Return the first query');
                        
                    }
                }) 
                
            }
        }) 
        t.end();       
     }
    })
  });