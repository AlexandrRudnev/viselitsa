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
    za = document.querySelector('.zad'),
    stroka = `Буаст,Вольтер,Гёте,Гиппократ,Гоголь,Гораций,
Горго,Горький,Гюго,Державин,Дидро,Дизраэли,Диккенс,Доде,Дюма
,Каннинг,Кольцов,Конфуций,Ларошфуко,Лессинг,Ломоносов,Менандр,Мятлев,Некрасов,Овидий,Панфилов,`,
    stroka1 = `Ему принадлежат слова: «Кто просит от судьбы только необходимое, 
часто получает от нее излишнее!»_Он сказал: «Кто умеет владеть собою, 
тот может повелевать людьми!»(французкий филосов)_Автор слов: «Не ошибается 
только тот, кто ничего не делает!» и «Пусть никто не думает, что мир ждёт его,
как спасителя!» (немецкий писатель)_Автор высказывания: «Брак – это лихорадка 
на выворот: он начинается жаром, а кончается холодом.» (Отец медицины)_Автор 
крылатой фразы: «Есть ещё порох в пороховницах!» (Русский писатель)_Автор крылатой 
фразы: «Соединять приятное с полезным!» и он утверждал: «Большие обещания уменьшают 
доверие!» (Римский поэт)_Этой женщине принадлежат знаменитые слова: «На щите или со щитом!» 
(Эта спартанка вручила своему сыну щит с этими словами)_Автоп высказывания: «Около хорошего 
человека потрёшься – как медная копейка о серебро, и сам за двугривенный сойдёшь!» (Русский 
писатель)_Он считал: «Популярность – слава, разменянная на медяки!» (Французкий писатель)_
Автор строк: «Осёл останется ослом, хотя осыпь его звёздами; где должно действовать умом, он
только хлопает ушами!» (Русский поэт)_Он говорил: «Люди перестают мыслить, когда перестают 
читать!» (Французкий филосов)_Автор слов: «Всё приходит для того, кто умеет ждать!» (Английский 
государственный деятель, писатель)_Автор слов: «Возле горящей свечи всегда увиваются мошки и 
букашки. Но разве в этом виновата свеча?» (Английский писатель)_Автор высказывания: «Слава бежит от 
тех, кто добивается её низкими средствами!» (Французкий писатель)_Автор высказывания: «Ревность – 
это искусство причинять себе больше зла, чем другим!» (Французкий писатель)_Автор слов: «Время и 
ничего не могут сделать для тех, кто ничего не делает для себя самого!» (Английский государственный 
деятель)_Автор поэтических строк: «Но увы, нет дорог к невозвратному! Никогда не взойдёт солнце с 
запада!» (Русский поэт)_Он говорил: «Полезных друзей три и вредных три. Полезные друзья – это друг 
прямой, друг искренний и друг, много слышавший! Вредные друзья – это друг лицемерный, друг льстивый 
и длуг болтливый!» (Древнекитайский филосов)_Именно он утверждал: «Люди, через чур предавшиеся 
маленьким делам, становятся не способными совершать большие!» (Французкий писатель – моралист)_Он 
сказал: «Некоторые люди знамениты, а некоторые заслуживают быть знаменитыми!» (Немецкий драматург)_
Ему принадлежат пророческие строки: «Колумбы русские, презрев угрюмый рок, меж льдами новый путь 
отворят на восток, и наша досегнёт в Америку держава!» (Первый русский учёный – естествоиспытатель)_
Он утверждал: «Справедливый человек не тот, кто не совершает несправедливости, а тот, который, имея 
возможность быть несправедливым, не желает быть таковым!» (Древнегреческий поэт – комедиограф)_
Настоящий автор слов: «Как хороши, как свежи были розы!», часто преписываемых Тургеневу. 
(Русский поэт)_Автор поэтических строк: «Поэтом можешь ты не быть, но гражданином быть обязан!» 
(Русский поэт)_Автор строк: «Пусть не хватает сил, но желание похвально!» (Римский поэт)_Автор 
слов: «Великое – не умирает!» (Генерал-майор, командир 316-й стрелковой дивизии, героически 
сражавшейся в Московской битве)_`;

stroka = stroka.replace(/\s/g, '');

let data = {
    arr: [],
    ol: [],
    net: [],
    sov: [],
    rond: [],
    rond1: []
};
data.rond = stroka.split(',');
data.rond1 = stroka1.split('_');

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
    let a = Math.floor(Math.random() * data.rond.length);
    data.arr = data.rond[a];
    za.innerHTML = data.rond1[a];    
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
    data.arr1 = Array.from(new Set(data.arr));
    data.arr.forEach(function (item, i) {       
        if (item == ent.value.toUpperCase()) {
            bukva[i].innerHTML = data.arr[i];
            data.sov = data.ol.filter(i => data.arr1.includes(i)); 
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
        if (data.arr1.length == data.sov.length) {
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

                    
