let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.header.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('menu-bars');
    header.classList.remove('active')
}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');
window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

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

