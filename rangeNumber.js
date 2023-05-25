function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum) return [];
    else {
      const countArr = rangeOfNumbers(startNum,endNum-1);
      countArr.push(endNum);
      return countArr;
    }
  };

  console.log(rangeOfNumbers(2,3))