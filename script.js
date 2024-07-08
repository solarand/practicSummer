// аккордеон

document.querySelectorAll('.label').forEach((label) => {
    label.addEventListener('click', () => {
        document.querySelector('.qa').style.height = '405px';
        let content = label.nextElementSibling;

        if (content.classList.contains('active')) {
            content.style.maxHeight = 0;
            content.classList.remove('active');
            label.classList.remove('active-label');
        } else {
            document.querySelectorAll('.content').forEach((el) => {
                el.style.maxHeight = 0;
                el.classList.remove('active');
                el.previousElementSibling.classList.remove('active-label');
            });
            
            document.querySelector('.qa').style.height = '900px';
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('active');
            label.classList.add('active-label'); 
        }
    });
});


//валидация формы


const emailPattern = re = /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const fio = document.querySelector('input[name="fio"]');
const number = document.querySelector('input[name="number"]');
const email = document.querySelector('input[name="email"]');
const dolznost = document.querySelector('input[name="dolznost"]');

fio.addEventListener('blur', () => {
    if(fio.value == ""){
        console.log(1)
        fio.style.border = '2px solid #FD7583';
        fio.classList.add('no');
    } else {
        console.log(1213);
        fio.style.border = '2px solid #9BCC37';
        fio.classList.add('yes');
    }
});

number.addEventListener('blur', () => {
    const len_nubmer = number.value.split('_').length-1;
    if(len_nubmer > 0 ){
        number.style.border = '2px solid #FD7583';
        number.classList.add('no');
    } else {
        console.log(number.value);
        number.style.border = '2px solid #9BCC37';
        number.classList.add('yes');
    }
});

email.addEventListener('blur', () => {
    if(!emailPattern.test(email.value)){
        console.log(email)
        email.style.border = '2px solid #FD7583';
        email.classList.remove('yes');
        email.classList.add('no');
    } else {
        console.log(1213);
        email.style.border = '2px solid #9BCC37';
        email.classList.add('yes');
    }
});

dolznost.addEventListener('blur', () => {
    if(dolznost.value == ""){
        console.log(1)
        dolznost.style.border = '2px solid #FD7583';
        dolznost.classList.add('no');
    } else {
        console.log(1213);
        dolznost.style.border = '2px solid #9BCC37';
        dolznost.classList.add('yes');
    }
});

const file_input = document.querySelector('input[name="file"]');
const spanFile = document.querySelector('#file')
const deleteFile = document.querySelector('.resume-name')
let resume, fileName

file_input.addEventListener('input', ()=>{
    const nameFile = document.querySelector('.resume_file')
    resume = file_input.value.split("\\").pop()
    console.log(resume)
    if(nameFile){
        nameFile.textContent = resume
    } else{
        spanFile.insertAdjacentHTML("afterEnd",   
    `
        <div class = 'name-din' style = 'display:flex; align-items: center; margin-top: -20px'>
            <p class='resume_file'>${resume}</p>
            <img class = 'resume-name' src='img/svg/close.png' style = 'margin-left:10px; height:25px; width:25px; cursor:pointer;'>    
        </div>
    `
    )
    
    document.querySelector('.resume-name').addEventListener('click', (event) => {
        event.preventDefault();
        removeFileElement();
    });
    }
     
})


function removeFileElement() {
    const fileElement = document.querySelector('.name-din'); // Находим элемент с информацией о файле

    if (fileElement) {
        fileElement.remove(); // Удаляем элемент из DOM
        file_input.value = ''; // Очищаем значение input
    }
}



document.querySelector('.record').addEventListener('submit', ()=>{
    event.preventDefault();
    const len_nubmer = number.value.split('_').length-1;
    let category, index = 0;

    if(document.querySelector('input[name="category"]:checked')){
        category = document.querySelector('input[name="category"]:checked').id;
    } else{
        category = '';
    }

    let values = [fio , email, dolznost, category]

    for(i=0; i< values.length-1; i++){
        let val = values[i].value;
        if(val == false){
            console.log(val)
            values[i].style.border = '2px solid #FD7583';
            values[i].classList.add('no');
            index++;
        } else{
            values[i].style.border = '2px solid #9BCC37';
            values[i].classList.add('yes');
        }
    }

    console.log(number.value.split('_').length-1)


    if(len_nubmer > 0 || number.value == false){
        number.style.border = '2px solid #FD7583';
        number.classList.add('no');
        index++;
    }  else{
        number.style.border = '2px solid #9BCC37';
        number.classList.add('yes');
    }

    if(values[3] != ''){
        document.getElementById('category-label').style.border = '2px solid #9BCC37';
    } else{
        document.getElementById('category-label').style.border = '2px solid #FD7583';
        index++;
    }


    if(file_input.value == ''){
        alert("Прикрепите резюме");
        document.getElementById('file').style.border = '2px solid #FD7583';
        document.getElementById('file').style.color = '#FD7583';
        document.getElementById('btnform').src = 'img/btnform_no.png';
        document.getElementById('btnform').classList.add('pulse');
        setTimeout(() => {
            document.getElementById('btnform').classList.remove('pulse');
        }, 3000)
        index++;
    } else{
        document.getElementById('file').style.border = '2px solid #9BCC37';
        document.getElementById('file').style.color = '#9BCC37';
        document.getElementById('btnform').src = 'img/btnform.png';
    }

    if(index == 0){
        alert("Ваш отклик отправлен");
    } else{
        alert("Проверьте введенные данные");
    }

    
});


// карусель для ценностей
    document.addEventListener('DOMContentLoaded', () => {
        
        const carousel = document.querySelector('.carousel');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let index = 0;

        // Клонируем все элементы для создания бесконечного цикла
        for (let i = 0; i < totalItems; i++) {
            let clone = items[i].cloneNode(true);
            carousel.appendChild(clone);
        }

        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight); // Ширина элемента с учетом margin

        function moveCarousel() {
            index++;
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(-${index * itemWidth}px)`;

            if (index === totalItems) {
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    carousel.style.transform = `translateX(0)`;
                    index = 0;
                    
                    setTimeout(() => {
                        carousel.style.transition = 'transform 0.5s ease';
                    }, 50);
                }, 500);
            }
        }

        setInterval(moveCarousel, 3000); 
    })



// swiper для life-lent

$('.card-lent').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive:[
        {
            breakpoint: 1150,
            settings:{
                slidesToShow: 3
            }
        },
        {
            breakpoint: 801,
            settings:{
                slidesToShow: 2
            }
        },
        {
            breakpoint: 570,
            settings:{
                slidesToShow: 1
            }
        },
        
    ]
  });
      

// бургер-меню

if(document.documentElement.clientWidth){
    document.querySelector('.burger_btn').addEventListener('click', ()=>{
        const burger_menu = document.querySelector('.navbar-burger');
        const header_mob = document.querySelector('.header');
        const heig = window.getComputedStyle(header_mob).height;


        if(window.getComputedStyle(header_mob).height == '101px'){
            burger_menu.style.display = 'flex';
            header_mob.style.height = '301px';
            document.querySelector('.burger-icon').src = 'img/svg/close.png'
        } 

        if(heig == '301px'){
            burger_menu.style.display = 'none';
            header_mob.style.height = '101px';
            document.querySelector('.burger-icon').src = 'img/svg/burger.svg'
        } 
    })
}


// маски

$.mask.definitions['u'] = ['1|2|3|4|5|6|9']
$("#mobile").mask("+7 (u99) 999-99-99", {autoclear: false});



