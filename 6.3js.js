function example (callback) {

    callback();

    return function () {
        alert(5 + 5);
    }
}

function argFunc () {
    alert(5)
}

const resultFunc = example(argFunc);

resultFunc();