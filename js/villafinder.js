(function(){

    var button1 = document.getElementById('button1'),
        wrapper1 = document.getElementById('wrapper1'),
        button2 = document.getElementById('button2'),
        wrapper2 = document.getElementById('wrapper2'),


        welcome = document.getElementById('welcome'),
        subwelcome = document.getElementById('sub_welcome'),

        ovbox = document.getElementById('ov_box'),
        locbox = document.getElementById('loc_box'),
        overlay = document.getElementById('overlay');

    function load() {
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
    }

    window.onload = load;

    //open and close menu when the button1 is clicked

    var open1 = false;
    var open2 = false;

    button1.addEventListener('click', handler1, false);
    wrapper1.addEventListener('click', cnhandle1, false);
    button2.addEventListener('click', handler2, false);
    wrapper2.addEventListener('click', cnhandle2, false);

    function cnhandle1(e1){
        e1.stopPropagation();
    }
    function cnhandle2(e1){
        e1.stopPropagation();
    }
    function handler1(e1){
        if (!e1) var e1 = window.event;
        e1.stopPropagation();//so that it doesn't trigger click event on document

        if(!open1){
            openNav1();
        }
        else{
            closeNav1();
        }
    }
    function handler2(e2){
        if (!e2) var e2 = window.event;
        e2.stopPropagation();//so that it doesn't trigger click event on document

        if(!open2){
            openNav2();
        }
        else{
            closeNav2();
        }
    }

    function openNav1(){
        open1 = true;
        button1.innerHTML = "back";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper1, 'opened-nav');
        classie.add(wrapper1, 'transition');
        classie.add(welcome, 'activated');
        classie.add(subwelcome, 'activated');
        classie.add(ovbox, 'ov_initial');
        classie.add(locbox, 'under');
    }
    function closeNav1(){
        open1 = false;
        button1.innerHTML = "we operate the largest websites for villa rentals in Asia-Pacific";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper1, 'opened-nav');
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
        classie.remove(locbox, 'under');
    }
    document.addEventListener('click', closeNav1);

    function openNav2(){
        open2 = true;
        button1.innerHTML = "back";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper2, 'opened-nav');
        classie.add(wrapper2, 'transition');
        classie.add(welcome, 'activated');
        classie.add(subwelcome, 'activated');
        classie.add(ovbox, 'ov_initial');
        classie.add(locbox, 'under');
    }
    function closeNav2(){
        open2 = false;
        button1.innerHTML = "we operate the largest websites for villa rentals in Asia-Pacific";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper2, 'opened-nav');
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(ovbox, 'ov_initial');
        classie.remove(locbox, 'under');
    }
    document.addEventListener('click', closeNav2);

})();