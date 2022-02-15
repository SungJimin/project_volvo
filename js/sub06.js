//sub06.js
//물건이 오른쪽에성 왼쪽으로 슝 하고 오게하는 기능을 배워보자.
$(function(){
    var scrTop = 0,
        offsetTop = [];

    // $뒤에 기능을 넣고자 하는 클래스 넣기
    $(window).scroll(function(){
        scrTop = $('html').scrollTop();
        offsetTop[0] = $('.con01 .fl').offset().top;

        console.log(scrTop, offsetTop[0]);
        //.image가 다 보일 때 효과가 나타나는데, 그보다 -600정도 위에서 효과가 나타나기 시작. -룰 주지 않으면 .image가 다 보일 때 효과가 나타난다.
        if(scrTop > offsetTop[0]-900){
            //애니메이션
            //1000이 1초. 1500이면 1.5초만에 온다는 뜻
            $('.fl img').animate({left : -100}, 1700);
        }

        if(scrTop > offsetTop[0]-700){
            //애니메이션
            //1000이 1초. 1500이면 1.5초만에 온다는 뜻
            $('.fr img').animate({right : -100}, 1700);
        }

    })
});
