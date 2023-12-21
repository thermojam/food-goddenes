
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 200,
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 572,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                }

            ]
        });

$('.accordion').accordion({
        heightStyle: 'content',
        header: '> .accordion-item > .accordion-header'
    });









