function num(from, before) {
    let start = from;
  
    let timerId = setInterval(function() { //setInterval() - вызывает ф-ию через указанный промежуток времени.
      alert(start);
      if (start == before) {
        clearInterval(timerId); //clearInterval() - отменяет повторяющееся выполнение программного кода, которое было установлено ранее вызовом метода setInterval().
      }
      start++;
    }, 1000);
  }
  
  num(1, 7);