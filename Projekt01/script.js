setInterval(uhr1, 1000)

const Uhrzeit = document.querySelector(' .Uhrzeit')

function uhr1(){
    const stunde = new Date()
    const zeit = Time(stunde.getHours())
    const min = Time(stunde.getMinutes())
    const sec = Time(stunde.getSeconds())

    Uhrzeit.textContent = `${zeit} : ${min} : ${sec}`
}

function Time(times){
    if(times < 10){
        return '0' + times
    }
    return times
}