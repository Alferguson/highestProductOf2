function highProd2 (arr) {
    let highest = Math.max(...arr);
    let newArr = arr.filter(e => e !== highest);
    let secondHighest = Math.max(...newArr);

    const answer = highest * secondHighest;
    console.log(answer);       
}

arr1 = [1,2,3,2,4,1,299,4000000000,3,2];

// ans: 1196000000000
highProd2(arr1);


// newArr = arr.filter(e => e !== Math.max(...arr));
// console.log(newArr);