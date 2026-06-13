// function getData(dataId,getNextData){
//     setTimeout(()=> {
//         console.log("DataId : "+ dataId)
//         if(getNextData){
//             getNextData()
//         }
//     } , 2000);
// }

const { reject } = require("async");

  
//   getData(1, () =>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(5)
//         })
//     })
//   })

//   console.log(1)
//   setTimeout(()=>{
//     console.log(2)
  
//   },0)
//   console.log(3)

// function getData(dataId){
//     const 
// }


 function getData(dataId){
    return new Promise((resolve ,reject) =>{
        setTimeout(()=>{
            console.log("Data is :" + dataId)
            reject("Its not fulfilled")
        } , 2000)
    })
 }
 getData(1).then(()=>getData(2)).then(()=>getData(3)).catch((err)=>)
