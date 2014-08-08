(function(){

    var button1 = document.getElementById('button1'),
        wrapper1 = document.getElementById('wrapper1'),

        button2 = document.getElementById('button2'),
        wrapper2 = document.getElementById('wrapper2'),

        button3 = document.getElementById('button3'),
        wrapper3 = document.getElementById('wrapper3'),

        welcome = document.getElementById('welcome'),
        subwelcome = document.getElementById('sub_welcome'),

        ovbox = document.getElementById('ov_box'),

        locbox = document.getElementById('loc_box'),

        cover1 = document.getElementById('cover1'),
        cover2 = document.getElementById('cover2'),
        cover3 = document.getElementById('cover3'),
        overlay = document.getElementById('overlay');

    function load() {
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
        classie.remove(button2, 'btn_initial');
        classie.remove(button3, 'btn_initial');
        classie.remove(wrapper2, 'btn_initial');
        classie.remove(wrapper3, 'btn_initial');
    }

    window.onload = load;

    //open and close menu when the button is clicked
    var open1 = false;
    var open2 = false;
    var open3 = false;

    button1.addEventListener('click', handler1, false);
    button2.addEventListener('click', handler2, false);
    button3.addEventListener('click', handler3, false);

    wrapper1.addEventListener('click', cnhandle, false);
    wrapper2.addEventListener('click', cnhandle, false);
    wrapper3.addEventListener('click', cnhandle, false);

    function cnhandle(e){
        e.stopPropagation();
    }

    function handler1(e){
        if (!e) var e = window.event;
        e.stopPropagation();//so that it doesn't trigger click event on document

        if(!open1){
            openNav1();
        }
        else{
            closeNav1();
        }
    }
    function handler2(e){
        if (!e) var e = window.event;
        e.stopPropagation();//so that it doesn't trigger click event on document

        if(!open2){
            openNav2();
        }
        else{
            closeNav2();
        }
    }
    function handler3(e){
        if (!e) var e = window.event;
        e.stopPropagation();//so that it doesn't trigger click event on document

        if(!open3){
            openNav3();
        }
        else{
            closeNav3();
        }
    }

    function closeNav1(){
        open1 = false;
        open2 = false;
        open3 = false;
        button1.innerHTML = "we operate the largest websites for villa rentals in Asia-Pacific";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper1, 'opened-nav');
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
        classie.remove(locbox, 'under');
        classie.remove(button2, 'btn2_final');
        classie.remove(button3, 'btn3_final');
        classie.remove(cover1, 'no_cover');
        classie.add(cover2, 'no_cover');
        classie.add(cover3, 'no_cover');
    }
    function closeNav2(){
        open1 = false;
        open2 = false;
        open3 = false;
        button2.innerHTML = "we develop specialty websites for niche villa markets";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper2, 'opened-nav');
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
        classie.remove(locbox, 'under');
        classie.remove(button1, 'btn1_final2');
        classie.remove(button3, 'btn3_final');
        classie.remove(cover1, 'no_cover');
        classie.add(cover2, 'no_cover');
        classie.add(cover3, 'no_cover');
    }
    function closeNav3(){
        open1 = false;
        open2 = false;
        open3 = false;
        button3.innerHTML = "we have developed a cutting-edge software for villa distribution";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper3, 'opened-nav');
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
        classie.remove(locbox, 'under');
        classie.remove(button2, 'btn2_final');
        classie.remove(button1, 'btn1_final3');
        classie.remove(cover1, 'no_cover');
        classie.add(cover2, 'no_cover');
        classie.add(cover3, 'no_cover');
    }

    function openNav1(){
        closeNav2();
        closeNav3();
        open1 = true;
        open2 = false;
        open3 = false;
        button1.innerHTML = "back";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper1, 'opened-nav');
        classie.add(wrapper1, 'transition');
        classie.add(welcome, 'activated');
        classie.add(subwelcome, 'activated');
        classie.add(ovbox, 'ov_initial');
        classie.add(locbox, 'under');
        classie.add(button2, 'btn2_final');
        classie.add(button3, 'btn3_final');
        classie.remove(cover1, 'no_cover');
        classie.add(cover2, 'no_cover');
        classie.add(cover3, 'no_cover');
    }
    function openNav2(){
        closeNav1();
        closeNav3();
        open1 = false;
        open2 = true;
        open3 = false;
        button2.innerHTML = "back";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper2, 'opened-nav');
        classie.add(wrapper2, 'transition');
        classie.add(welcome, 'activated');
        classie.add(subwelcome, 'activated');
        classie.add(ovbox, 'ov_initial');
        classie.add(locbox, 'under');
        classie.add(button1, 'btn1_final2');
        classie.add(button3, 'btn3_final');
        classie.add(cover1, 'no_cover');
        classie.remove(cover2, 'no_cover');
        classie.add(cover3, 'no_cover');
    }
    function openNav3(){
        closeNav1();
        closeNav2();
        open1 = false;
        open2 = false;
        open3 = true;
        button3.innerHTML = "back";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper3, 'opened-nav');
        classie.add(wrapper3, 'transition');
        classie.add(welcome, 'activated');
        classie.add(subwelcome, 'activated');
        classie.add(ovbox, 'ov_initial');
        classie.add(locbox, 'under');
        classie.add(button2, 'btn2_final');
        classie.add(button1, 'btn1_final3');
        classie.add(cover1, 'no_cover');
        classie.add(cover2, 'no_cover');
        classie.remove(cover3, 'no_cover');
    }



})();