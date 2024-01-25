new daum.roughmap.Lander({
    "timestamp" : "1704184588307",
    "key" : "2hiby",
    "mapWidth" : "900",
    "mapHeight" : "250"
}).render();




$('.top_btn').click(function(){
    $('html, body').animate({
        scrollTop : 0
})
})

$('.product_box').focus();



let observer = new IntersectionObserver((e)=>{
    e.forEach((캐릭터)=>{
        if(캐릭터.isIntersecting){
            캐릭터.target.style.opacity = 1;
            캐릭터.target.style.transform = 'translate(0px, 0px)';
    }else{
        캐릭터.target.style.opacity = 0;
        캐릭터.target.style.transform = 'translate(100px, 50px)';
    }
    })

})

let one = document.querySelectorAll('div')
observer.observe(one[67])
observer.observe(one[72])






let observer01 = new IntersectionObserver((e)=>{
    e.forEach((캐릭터01)=>{
        if(캐릭터01.isIntersecting){
            캐릭터01.target.style.opacity = 1;
            캐릭터01.target.style.transform = 'translate(0px, 0px)';
    }else{
        캐릭터01.target.style.opacity = 0;
        캐릭터01.target.style.transform = 'translate(-100px, -50px)';
    }
    })

})

let two = document.querySelectorAll('div')
observer01.observe(two[69])
observer01.observe(two[70])
observer01.observe(two[71])



let observer02 = new IntersectionObserver((e)=>{
    e.forEach((캐릭터02)=>{
        if(캐릭터02.isIntersecting){
            캐릭터02.target.style.opacity = 1;
            캐릭터02.target.style.transform = 'translate(0px, 0px)';
    }else{
        캐릭터02.target.style.opacity = 0;
        캐릭터02.target.style.transform = 'translate(-150px, 0)';
    }
    })

})

let three = document.querySelectorAll('div')
observer02.observe(three[68])
observer02.observe(three[73])





$('.modal_open').click(function(){
    $('.modal').css('display', 'block')
})

$('.modal_close').click(function(){
    $('.modal').css('display', 'none')
})


























$(window).on('scroll', function(){
    var 스크롤양 = document.querySelector('html').scrollTop;
    var 전체높이 = document.querySelector('html').scrollHeight;
    var 보이는높이 = document.querySelector('html').clientHeight;
    var 토탈높이 = 전체높이 - 보이는높이 ;
    var 퍼센트 = (스크롤양 / 토탈높이) * 100;
    document.querySelector('.ui-bar').style.width = 퍼센트 + "%";
})