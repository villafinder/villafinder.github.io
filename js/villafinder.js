(function(){

	var button = document.getElementById('button'),
    wrapper = document.getElementById('wrapper'),
    overlay = document.getElementById('overlay');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "choose";
        classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	  }
	  open = !open;
	}


})();
