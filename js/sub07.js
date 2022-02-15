$(function(){
    var scrTop = 0,
        offsetTop = [];
    $(window).scroll(function(){
        scrTop = $('html').scrollTop();
        offsetTop[0] = $('.content .sc01').offset().top;
        offsetTop[1] = $('.content .sc03').offset().top;
        offsetTop[2] = $('.content .sc04').offset().top;

        console.log(scrTop, offsetTop[2]);

        if(scrTop > offsetTop[0]-200){
            //애니메이션
            $('.sc01 .blank').animate({height : 0}, 1000);
            $('.sc01 .hl header').animate({height : 480}, 1000);
        }
        if(scrTop > offsetTop[1]-400){
            //애니메이션
            $('.sc03 .blank').animate({height : 0}, 1000);
            $('.sc03 .hr header').animate({height : 480}, 1000);
        }
        if(scrTop > offsetTop[1]){
            //애니메이션

            $('div.content>.sc03>.hl>header>.lam').animate({marginLeft : 270}, 1000);
            $('.sc03 .hl .suv').animate({marginLeft : 0}, 2000);
        }

        if(scrTop > offsetTop[2]-900){
            //애니메이션
            $('.sc04 .sliding').animate({marginLeft : 0}, 1700);
        }

    })
});
