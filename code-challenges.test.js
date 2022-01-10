// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// use a function similar to .shift() or .pop() to remove an element within the array
// .shift removes the first element of an array and returns that removed element
// randomizer is Math.floor(Math.random() * array.length)
// 

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// describe("remRandArr", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
  
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(remRandArr(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//       expect(remRandArr(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
//     })
//   })
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// console.log(colors1.pop(colors1[0]))


// b) Create the function that makes the test pass.
// this would work in a perfect world 

    // remRandArr = (arr) => {
    //     arr.reverse().pop()
    //     const newArr = []
    //     while (newArr.length < arr.length){
    //         if (newArr.includes(arr[Math.floor(Math.random() * arr.length)])){
    //             newArr.push(arr[Math.floor(Math.random() * arr.length)])
    //         }
    //     }
    //     return console.log(newArr)
    // }
    

    // remRandArr(colors1)
// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("minMax", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(minMax(nums1)).toEqual([-8, 90])
      expect(minMax(nums2)).toEqual([5, 109])
    })
  })
// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]



// b) Create the function that makes the test pass.
// using min and max method push into a new array.. i think thats it..

minMax = (numArr) => {
    newArr = []
    newArr.push((Math.min(...numArr)))
    newArr.push((Math.max(...numArr)))
    return newArr
}



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("repeatNum", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(repeatNum(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

//[...new Set(array)] creates a unique "set" or array
// concat both arrays into one big papa array, and use the set function to create a unique array (with no repeating values)

repeatNum = (arr1,arr2) => {

    let newArr = [...new Set(arr1.concat(arr2))]
    return newArr

}

