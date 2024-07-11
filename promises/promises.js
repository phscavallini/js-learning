function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('BAD DATA')
        }, 100)
    })
}

function fun2() {
    console.log('Function 2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🥸')
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`SUCCESS: ${data}`)
}

function onError(errorCode) {
    console.log(`ERROR: ${errorCode}`)
}

function onFinally(errorCode) {
    console.log('FINALLY WE BE DONE YO')
}

fun1()
    .then(fun2, onError)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)