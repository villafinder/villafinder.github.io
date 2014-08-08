(function(){

    var button1 = document.getElementById('button1'),
        wrapper1 = document.getElementById('wrapper1'),
        welcome = document.getElementById('welcome'),
        subwelcome = document.getElementById('sub_welcome'),
        wwd2 = document.getElementById('wwd2'),
        wwd3 = document.getElementById('wwd3'),
        ovbox = document.getElementById('ov_box'),
        locbox = document.getElementById('loc_box'),
        overlay = document.getElementById('overlay');

    function load() {
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(wwd2, 'initial');
        classie.remove(wwd3, 'initial');
        classie.remove(ovbox, 'ov_initial');
    }

    window.onload = load;

    //open and close menu when the button1 is clicked
    var open = false;
    button1.addEventListener('click', handler, false);
    wrapper1.addEventListener('click', cnhandle, false);

    function cnhandle(e){
        e.stopPropagation();
    }

    function handler(e){
        if (!e) var e = window.event;
        e.stopPropagation();//so that it doesn't trigger click event on document

        if(!open){
            openNav();
        }
        else{
            closeNav();
        }
    }
    function openNav(){
        open = true;
        button1.innerHTML = "back";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper1, 'opened-nav');
        classie.add(wrapper1, 'transition');
        classie.add(welcome, 'activated');
        classie.add(subwelcome, 'activated');
        classie.add(wwd2, 'final2');
        classie.add(wwd3, 'final');
        classie.add(ovbox, 'ov_initial');
        classie.add(locbox, 'under');
    }
    function closeNav(){
        open = false;
        button1.innerHTML = "we operate the largest websites for villa rentals in Asia-Pacific";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper1, 'opened-nav');
        classie.remove(welcome, 'activated');
        classie.remove(subwelcome, 'activated');
        classie.remove(wwd2, 'final2');
        classie.remove(wwd3, 'final');
        classie.remove(ovbox, 'ov_initial')
        classie.remove(locbox, 'under');
    }
    document.addEventListener('click', closeNav);

})();