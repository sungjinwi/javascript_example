function numberOfItems(arr, item) {
    // Write the code that goes here
    let result = 0;
    arr.forEach((component)=>{
        if(Array.isArray(component)) {
            result += numberOfItems(component, item)
        }
        if(component===item) result ++;
    })
    return result;
  }
  
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25 , ["apple"]]
  ];

  
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));