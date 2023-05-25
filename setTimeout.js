let i = 0;

let start = Date.now();

function count() {

  // 무거운 작업을 쪼갠 후 이를 수행 (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("처리에 걸린 시간: " + (Date.now() - start) + "ms");
  } else {
    setTimeout(count); // 새로운 호출을 스케줄링 (**)
  }

}

count();