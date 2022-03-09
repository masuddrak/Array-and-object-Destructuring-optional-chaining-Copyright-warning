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