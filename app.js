// Array and object Destructuring, optional chaining

const numbers=[7,5,54]
 const [x,y,z]=numbers
//  console.log(x,y,z)
const names=(frist,last)=>{
    const fulllName=[frist,last]
    return fulllName
}

const [frist,last]=names('Masud','Rana')
console.log(frist,last)

//  object Destructuring
 const employe={
     name:'Masud Rana',
     Ide:'vs cod',
     languages:['html','javascript','node.js'],
     localJob:{
         name:'defodil university',
         position:'second',
         duration:'5 years'
     }
 }
 const {duration}=employe.localJob
 console.log(duration)