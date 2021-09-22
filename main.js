const nemo = ["nemo"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
}

findNemo(large); // O(n) ==>  Linear Time
//______________________________________

function compressBoxes(boxes) {
  console.log(boxes[0]);
}

compressBoxes(boxes); //O(1) => Constant Time
//______________________________________

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)

//______________________________________

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n/input)
    anotherFunction(); //O(n)
    let stranger = true; // O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge(); // BIG O(3 + 4n)

//______________________________________

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

anotherFunChallenge(); // BIG O(4 + 5n)
//__________________

//remove constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    // O(N/2)
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    // o(100)
    console.log("hi");
  }
}

//O(n)

//____________________________

function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(2n)

//__________

const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairsOfArray(boxes);

//O(n * n) => O(n^2)

//__________________

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log(" and these are their sums");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
O(n ^ 2);

//_______________________________
//space complexity

function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booo");
  }
}

booo([1, 2, 3, 4, 5]);

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

//O(n)


//DELETE THIS

let marinnaArr = ['not here','not here','not here','not here','not here','not here','not here','not here','not here','not here','not here','not here','here','not here','not here','not here','not here','not here','not here','not here','not here','not here']

let largeArr = Array(10000).fill('not here')
largeArr.push('here')

function wheresMarinna(x){
    let t0 = performance.now() // O(1)
    console.log(x, t0)
    let value = x.find(num => num === 'here')
    let t1 = performance.now()
    console.log("this took" + (t1-t0) + "ms")
    return value
}

