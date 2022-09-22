function simpleAndComplexNamber(n) {


    if (n < 2) {
        return 'Введите число больше 1';
    }
    else if (n > 1000) {
        return 'Данные неверны';
    } else if (n === 2 && n > 2) {
      return 'Простое число';
    }
  
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'Сложное число';
      }
      i +=1;
    } 
    
    return 'Простое число';
  }

  alert(`2 - ${simpleAndComplexNamber(2)}`);
  alert(`15 - ${simpleAndComplexNamber(15)}`);
  alert(`10000 - ${simpleAndComplexNamber(10000)}`);
  alert(`1 - ${simpleAndComplexNamber(1)}`);
