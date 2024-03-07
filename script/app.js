$('.top_btn').click(function(){
    $('html, body').animate({
        scrollTop : 0
})
})

$('.product_box').focus();














let observer = new IntersectionObserver((e)=>{
    e.forEach((브랜드)=>{
        if(브랜드.isIntersecting){
            브랜드.target.style.opacity = 1;
    }else{
        브랜드.target.style.opacity = 0;
    }
    })

})

let one = document.querySelectorAll('div')
observer.observe(one[14])
observer.observe(one[15])






let observer01 = new IntersectionObserver((e)=>{
    e.forEach((브랜드01)=>{
        if(브랜드01.isIntersecting){
            브랜드01.target.style.opacity = 1;
    }else{
        브랜드01.target.style.opacity = 0;
    }
    })

})

let two = document.querySelectorAll('div')
observer01.observe(two[19])
observer01.observe(two[22])
observer01.observe(two[25])






let observer02 = new IntersectionObserver((e)=>{
    e.forEach((브랜드02)=>{
        if(브랜드02.isIntersecting){
            브랜드02.target.style.opacity = 1;
            브랜드02.target.style.transform = 'translate(0px, 0px)';
    }else{
        브랜드02.target.style.opacity = 0;
        브랜드02.target.style.transform = 'translate(0px, 150px)';
    }
    })

})

let three = document.querySelectorAll('div')
observer02.observe(three[20])
observer02.observe(three[23])
observer02.observe(three[26])







let observer03 = new IntersectionObserver((e)=>{
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

let four = document.querySelectorAll('div')
observer03.observe(four[73])
observer03.observe(four[78])






let observer04 = new IntersectionObserver((e)=>{
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

let five = document.querySelectorAll('div')
observer04.observe(five[75])
observer04.observe(five[76])
observer04.observe(five[77])



let observer05 = new IntersectionObserver((e)=>{
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

let six = document.querySelectorAll('div')
observer05.observe(six[74])
observer05.observe(six[79])





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