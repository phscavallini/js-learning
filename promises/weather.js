
let getWeather = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject('Partially Rainy')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('☀️')
                    break
                case 'Cloudy':
                    resolve('☁️')
                    break
                case 'Rainy':
                    resolve('🌧️')
                default:
                    reject('NO ICON FOUND')
            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

getWeather()
.then(getWeatherIcon)
.then(onSuccess, onError)