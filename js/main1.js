"use strict";

let btn = document.querySelectorAll('button'),
    bukva = document.getElementsByClassName('choose-item'),
    ent = document.querySelector('.item'),
    word = document.querySelector('.ente'),
    netu = document.querySelector('.xa'),
    as = document.querySelectorAll('.choose'),
    vis = document.querySelectorAll('img'),
    l = document.querySelector('.life'),
    d = document.querySelector('.dead'),        
    urov = document.querySelectorAll('a'),
    stroka = `Кант,Хроника,Зал,Галера,Балл,Вес,Кафель,Знак,Фильтр,Башня,Кондитер
    ,Омар,Чан,Пламя,Банк,Тетерев,Муж,Камбала,Груз,Кино,лаваш,Калач,Геолог,Бальзам,Бревно
    ,Жердь,Борец,Самовар,Карабин,Подлокотник,Барак,Мотор,Шарж,Сустав,Амфитеатр,
Скворечник,Подлодка,Затычка,Ресница,Спичка,Кабан,Муфта,Синоптик,Характер,Мафиози
,Фундамент,Бумажник,Библиофил,Дрожжи,Казино,Конечность,Пробор,Дуст,Комбинация,Мешковина,
Процессор,Крышка,Сфинкс,Пассатижи,Фунт,Кружево,Агитатор,Формуляр,Прокол,Абзац,Караван,Леденец
,Кашпо,Баркас,Кардан,Вращение,Заливное,Метрдотель,Клавиатура,Радиатор,Сегмент,
Обещание,Магнитофон,Кордебалет,Заварушка,`;

let data = {
    arr: [],
    ol: [],
    net: [],
    sov: [],
    rond: []
};
data.rond = stroka.split(',');
console.log(data.rond[data.rond.length-1]);
btn[0].addEventListener('click', function () {    
    urov.forEach(function (item, i) {
       urov[i].style.display = 'block';
    });
});

let aud1 = new Audio('img/9f3e49b8de7c9d7.mp3'),
    aud2 = new Audio('img/40a84da0291a73b.mp3');
word.disabled = true;
btn[3].disabled = true;
btn[1].addEventListener('click', function () {
    word.disabled = false;
    btn[2].disabled = true;    
    word.focus();
});
btn[2].addEventListener('click', function () {
    data.arr = data.rond[Math.floor(Math.random() * data.rond.length)];    
    data.arr = data.arr.toUpperCase().split('');  
    data.arr.forEach(function (it, i) {        
        as[1].insertAdjacentHTML("beforebegin", '<div class="choose-item">*</div>');
    });
    btn[4].disabled = false;
    ent.disabled = false;
    btn[3].disabled = true;
    btn[2].disabled = true;
    btn[1].disabled = true;
    word.disabled = true;
    ent.focus();
    
});
word.addEventListener('input', function () {
    btn[3].disabled = false;    
});

ent.disabled = true;
btn[4].disabled = true;
btn[3].addEventListener('click', function () {    
    data.arr = word.value.toUpperCase().split('');
    word.value = word.value.replace(/./g, '*');   
    data.arr.forEach(function (it, i) {        
        as[1].insertAdjacentHTML("beforebegin", '<div class="choose-item">*</div>');
    });
    btn[4].disabled = false;
    ent.disabled = false;
    btn[3].disabled = true;
    btn[2].disabled = true;
    btn[1].disabled = true;
    word.disabled = true;
    ent.focus();
});

btn[4].addEventListener('click', function () {
    data.ol.push(ent.value.toUpperCase());
    data.ol = data.ol.filter(function(f) {
        return f !== '';
       });
    data.ol = Array.from(new Set(data.ol)); 

    data.arr.forEach(function (item, i) {       
        if (item == ent.value.toUpperCase()) {
            bukva[i].innerHTML = data.arr[i];
            data.sov.push(ent.value.toUpperCase());
            data.sov = Array.from(new Set(data.sov));
        }
    });
    data.net = data.ol.filter(i => !data.arr.includes(i));
    netu.innerHTML = data.net;

    data.net.forEach(function (item, i) {
        vis[i].style.display = 'block';
    });
    ent.value = '';
    ent.focus();
    data.sov.forEach(function (item, i) {
        if (data.arr.length == data.sov.length) {
            aud1.play();
            l.style.display = 'block';
            ent.disabled = true;
            btn[4].disabled = true;
            for (let i = 0; i < 5; ++i) {
                vis[i].style.display = 'none';
                
            }
            for (let i = 5; i < 12; ++i) {
                vis[i].style.display = 'block';
                
            }
        }
    });
    
    data.net.forEach(function (item, i) {
        if (i == 11) {
            aud2.play();
            d.style.display = 'block';
            ent.disabled = true;
            btn[4].disabled = true;
            for (let i = 0; data.arr.length; ++i) {
                bukva[i].innerHTML = data.arr[i];
            }
        }
    });
    
});

                    