var swiper = new Swiper('.smart_mainBanner', {
            grabCursor: true,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            speed:1200,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.mainBanner-pagination',
                clickable: true,
            },
});

       $(window).scroll(function(){
            var windowH = $(window).height();
            scrollY=$(window).scrollTop();

            $('.smart_contWrap > .smart_contArea > .cont_text > .underline').each(function(){
                var imgPosition = $(this).offset().top;
                if(scrollY > imgPosition - windowH){
                    $(this).addClass("lineani");
                }else{
                    $(this).removeClass("lineani")
                }
            })
            $('.smart_contents > .smart_contWrap > .smart_contArea > .cont_image').each(function(){
                var imgPosition = $(this).offset().top;
                if(scrollY > imgPosition - windowH){
                    $(this).addClass("txtani_7s");
                }else{
                    $(this).removeClass("txtani_7s")
                }
            })
            $( '.smart_contWrap > .smart_contArea > .cont_text > strong').each(function(){
                var imgPosition = $(this).offset().top;
                if(scrollY > imgPosition - windowH){
                    $(this).addClass("txtani_8s");
                }else{
                    $(this).removeClass("txtani_8s")
                }
            })
            $(' .smart_contWrap > .smart_contArea > .cont_text > p').each(function(){
                var imgPosition = $(this).offset().top;
                if(scrollY > imgPosition - windowH){
                    $(this).addClass("txtani_1s");
                }else{
                    $(this).removeClass("txtani_1s")
                }
            })
            $(' .smart_contWrap > .smart_contArea > .cont_text > .link_list').each(function(){
                var imgPosition = $(this).offset().top;
                if(scrollY > imgPosition - windowH){
                    $(this).addClass("txtani_1s");
                }else{
                    $(this).removeClass("txtani_1s")
                }
            })
        })