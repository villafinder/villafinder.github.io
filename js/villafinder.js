(function(){

	var button = document.getElementById('button'),
    wrapper = document.getElementById('wrapper'),
    welcome = document.getElementById('welcome'),
    overlay = document.getElementById('overlay');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "explore";
        classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
        classie.add(welcome, 'activated');
	  }
	  open = !open;
	}


})();
