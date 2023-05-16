$(document).ready(function () {
    $('.product-items').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });
  

    $('.topSelling').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    });

    // noUislider
    var html5Slider = document.getElementById('html5');
    noUiSlider.create(html5Slider, {
        start: [100, 1000],
        connect: true,
        range: {
            'min': 20,
            'max': 1000
        }
    });

    var inputNumber = document.getElementById('input-number');
    var inputNumber1 = document.getElementById('input-number-1');

    html5Slider.noUiSlider.on('update', function (values, handle) {
        var value = values[handle];
        if (handle) {
            inputNumber.value = value;
        } else {
            inputNumber1.value = value;
        }
    });

    inputNumber1.addEventListener('change', function () {
        html5Slider.noUiSlider.set([this.value, null]);
    });

    inputNumber.addEventListener('change', function () {
        html5Slider.noUiSlider.set([null, this.value]);
    });

});




