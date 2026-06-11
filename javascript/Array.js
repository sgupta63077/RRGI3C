// const array=[1,2,3,4,5,6,7,8,9,10]
// array.push(11)
// console.log(array)
// array.pop(9)
// console.log(array)
// console.log(array.includes(45))
// console.log(array.indexOf(3))
// console.log(array.unshift(1))
// console.log(array.shift(4))
// nums=array.slice(1,3)
// console.log(nums)
// console.log(array.splice(4,10))
// console.log(array.reverse(10))
// console.log(array.slice(2,5))
// console.log(array.includes(45))
// console.log(array.splice(5,10))

const num=[1,2,3,4,5,6,60,50,40,30,20,90]
num.forEach(element=> {
     console.log(element)
});
num.map(element=>{
    console.log(element *2)
});
console.log(num)
const even=num.filter(i=>{
   return i%2==0
});
console.log(even)
const large=num.find(i=>{
   return i>=30
});
console.log(large)

