function highProd2 (arr) {
    let answer;
    const highest = Math.max(...arr);
    const lowest = Math.min(...arr);
    const highArr = arr.filter(number => number !== highest);
    const lowArr = arr.filter(number => number !== lowest);
    const secondHighest = Math.max(...highArr);
    const secondLowest = Math.min(...lowArr);

    const highAnswer = highest * secondHighest;
    const lowAnswer = lowest * secondLowest;
    lowAnswer > highAnswer ? answer = lowAnswer : answer = highAnswer;
    console.log(answer);       
}

arr1 = [1,2,3,2,4,1,299,4000000000,3,2];
arr2 = [1,2,3,-500,-400,2];
arr3 = [1,2,-300,900,2];

// ans: 1196000000000
console.log(`First= `);
highProd2(arr1);
console.log(`2nd= `);
highProd2(arr2);
console.log(`3rd= `);
highProd2(arr3);




// newArr = arr.filter(e => e !== Math.max(...arr));
// console.log(newArr);