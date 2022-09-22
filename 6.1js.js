function evenOddNumber() {
    let even = [];
    let odd = [];
    let elem = []
    let arr = [0, 3, 2, 5, 8, false, 17, 24, 29, true];
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
            if (arr[i] %2 === 0){
                even++; //Число чётное
            } else {
                odd++; //Число нечётное
            }
        }
    }
    
    alert(even + " четных")
    alert( odd + " нечетных")
}
evenOddNumber();
