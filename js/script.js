"use strict";

//Ленивая загрузка изображений
lazyload();

//Cвайперы
const swiper1 = new Swiper('.gallery-swiper', {
	preloadImages: false,
	lazy: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerGroup: 1,
		},
		768: {
			spaceBetween: 34,
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
		},
		1024: {
			spaceBetween: 35,
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
		},
		1440: {
			spaceBetween: 50,
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
		},
	},
});

const swiper2 = new Swiper('.edition-swiper', {
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			spaceBetween: 45,
			slidesPerView: 2,
			slidesPerColumn: 4,
			slidesPerGroup: 7,
		},
		768: {
			spaceBetween: 37,
		},
		1024: {
			spaceBetween: 49,
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1440: {
			spaceBetween: 50,
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
});

const swiper3 = new Swiper('.projects-swiper', {
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		768: {
			spaceBetween: 34,
		},
		1024: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1440: {
			spaceBetween: 57,
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
});

const swiper4 = new Swiper('.events-swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	pagination: {
        el: '.swiper-pagination',
    }
});

//Селект
const element = document.querySelector ('#selectCustom');
	const choices = new Choices(element, {
		searchEnabled: false,
		itemSelectText: ""
});

//Табы каталог
document.querySelectorAll('.catalog__button').forEach(function(flag) {
	flag.addEventListener('click', function(event) {
		const path = event.currentTarget.dataset.path
		document.querySelectorAll('.catalog__description').forEach(function(tabdescription) {
			tabdescription.classList.remove('catalog__description-active')
		})
		document.querySelector(`[data-target="${path}"]`).classList.add('catalog__description-active');
	})
})

document.querySelectorAll('.catalog__button').forEach(function(fl) {
	fl.addEventListener('click', function(ev) {
		const path = ev.currentTarget.dataset.path
		document.querySelectorAll('.accordion__content').forEach(function(tabdescription) {
			tabdescription.classList.remove('accordion__content-active')
		})
		document.querySelector(`[data-target="${path}"]`).classList.add('accordion__content-active')
	})
})

$("#catalog__tabs").on("click", ".catalog__button", function() {
	$("#catalog__tabs .catalog__button").removeClass("catalog__button-active"); //удаляем класс во всех вкладках
	$(this).addClass("catalog__button-active"); //добавляем класс текущей (нажатой)
});		

//Аккардеон каталог
$( function() {
	$( "#accordion" ).accordion({
		collapsible: true
	});
});

$("#accordion-buttons").on("click", ".accordion-button", function(){
	$("#accordion-buttons .accordion-button").removeClass("accordion-button-active"); //удаляем класс во всех вкладках
	$(this).addClass("accordion-button-active"); //добавляем класс текущей (нажатой)
});

//Табы в аккардеоне
document.querySelectorAll('.accordion-button').forEach(function(person) {
	person.addEventListener('click', function(event) {
		const path = event.currentTarget.dataset.path
		document.querySelectorAll('.catalog-card').forEach(function(catalogCard) {
			catalogCard.classList.remove('catalog-card-active')
		})
		document.querySelector(`[data-target="${path}"]`).classList.add('catalog-card-active')
	})
})

//Маска телефона в форме
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


//Карта в контактах
ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76,37.62],
      zoom: 13
});
	var myPlacemark = new ymaps.Placemark([55.758,37.601], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/map.svg',
		iconImageSize: [20, 20],
	});

	myMap.geoObjects.add(myPlacemark);
}

//Выпадающие скроллы в шапке
document.querySelector('#item1').addEventListener('click', function() {
	document.querySelector('#scroll1').classList.toggle('scroll-active'),
	document.querySelector('.svg-close1').classList.toggle('svg-open')
})     

document.querySelector('#item2').addEventListener('click', function() {
	document.querySelector('#scroll2').classList.toggle('scroll-active'),
	document.querySelector('.svg-close2').classList.toggle('svg-open')
})   

document.querySelector('#item3').addEventListener('click', function() {
	document.querySelector('#scroll3').classList.toggle('scroll-active'),
	document.querySelector('.svg-close3').classList.toggle('svg-open')
})   

document.querySelector('#item4').addEventListener('click', function() {
	document.querySelector('#scroll4').classList.toggle('scroll-active'),
	document.querySelector('.svg-close4').classList.toggle('svg-open')
})   

document.querySelector('#item5').addEventListener('click', function() {
	document.querySelector('#scroll5').classList.toggle('scroll-active'),
	document.querySelector('.svg-close5').classList.toggle('svg-open')
})   


window.onclick = function(e) {
	if (!e.target.matches('#item1')) {
		var myDropdown = document.getElementById("scroll1");
		if (myDropdown.classList.contains('scroll-active')) {
			myDropdown.classList.remove('scroll-active');
		}
		var myDropdown = document.getElementById("svg-close1");
		if (myDropdown.classList.contains('svg-open')) {
			myDropdown.classList.remove('svg-open');
		}
	}
	if (!e.target.matches('#item2')) {
		var myDropdown = document.getElementById("scroll2");
		if (myDropdown.classList.contains('scroll-active')) {
			myDropdown.classList.remove('scroll-active');
		}
		var myDropdown = document.getElementById("svg-close2");
	 	if (myDropdown.classList.contains('svg-open')) {
			myDropdown.classList.remove('svg-open');
		}
	}
	if (!e.target.matches('#item3')) {
		var myDropdown = document.getElementById("scroll3");
		if (myDropdown.classList.contains('scroll-active')) {
			myDropdown.classList.remove('scroll-active');
		}
		var myDropdown = document.getElementById("svg-close3");
		if (myDropdown.classList.contains('svg-open')) {
			myDropdown.classList.remove('svg-open');
		}
	}
	if (!e.target.matches('#item4')) {
		var myDropdown = document.getElementById("scroll4");
		if (myDropdown.classList.contains('scroll-active')) {
			myDropdown.classList.remove('scroll-active');
		}
		var myDropdown = document.getElementById("svg-close4");
		if (myDropdown.classList.contains('svg-open')) {
			myDropdown.classList.remove('svg-open');
		}
	}
	if (!e.target.matches('#item5')) {
		var myDropdown = document.getElementById("scroll5");
		if (myDropdown.classList.contains('scroll-active')) {
			myDropdown.classList.remove('scroll-active');
		}
		var myDropdown = document.getElementById("svg-close5");
	  	if (myDropdown.classList.contains('svg-open')) {
			myDropdown.classList.remove('svg-open');
		}
	}
}

//Бургер раскрытие
document.querySelector('.header-top__burger').addEventListener('click', function() {
	document.querySelector('.header-top__list').classList.toggle('menu-active'),
	document.querySelector('.header-top__link').classList.toggle('link-active'),
	document.querySelector('burger-active').classList.toggle('.header-top__burger')
})

//Бургер актив
var x = document.getElementById("burger");
x.addEventListener("click", myFunction);
function myFunction() {
  x.classList.toggle("burger-active");
}

//Форма хедер
document.querySelector('.header-top__form_button').addEventListener('click', function() {
	document.querySelector('.header-top__form_input').classList.toggle('header-top__form_input-active'),
	document.querySelector('.header-top__form').classList.toggle('header-top__form-active'),
	document.querySelector('.logo').classList.toggle('display-none'),
	document.querySelector('.header-top__burger').classList.toggle('display-none'),
	document.querySelector('.header-top__cross-hidden').classList.toggle('header-top__cross'),
	document.querySelector('.header-top').classList.toggle('header-top-open320'),
	document.querySelector('.header-top__form_button').classList.toggle('header-top__form_button-320')
})

document.querySelector('.header-top__cross-hidden').addEventListener('click', function() {
	document.querySelector('.header-top-open320').classList.toggle('header-top-close'),
	document.querySelector('.header-top__form_input-active').classList.toggle('display-none'),
	document.querySelector('.header-top__cross').classList.toggle('header-top__cross-close'),
	document.querySelector('.display-none').classList.toggle('display-block'),
	document.querySelector('.logo').classList.toggle('display-block'),
	document.querySelector('.header-top__form_button').classList.toggle('header-top__form_button-one')
})

//События 
document.querySelector('.events__button').addEventListener('click', function() {
	document.querySelector('.events__button').classList.toggle('events__button_hidden')
})

document.querySelector('.events__button').addEventListener('click', function() {
	document.querySelectorAll('.hidden-desktop').forEach(function (visible) {
		visible.classList.toggle('visible-events')
	})
})

//Аккардеон издания
$( function() {
    $( "#edition__accordion" ).accordion({
		collapsible: true,
		classes: {
			"ui-accordion-header": "edition__accordion_header",
			"ui-accordion-header-active": "edition__accordion_header-active",
			"ui-accordion-content-active": "edition__accordion_content-active",
			"ui-accordion-content": "edition__accordion_content"
	}})
});

//Попытка настройки аккордеона издания-320
function check() {
var chbox;
chbox=document.getElementById('accordion-check');
	if (chbox.checked) {
		$( "#edition__accordion" ).accordion({
			collapsible: true
		  });
	}
	else {
		$( "#edition__accordion" ).accordion({
			collapsible: false
			}
		  )}
}
