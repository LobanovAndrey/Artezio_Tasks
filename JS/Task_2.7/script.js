const mem_cards = document.querySelectorAll('.card');
 
var cardIsUpside = false;
var x1, x2;
var lock = false;

mem_cards.forEach(card => card.addEventListener('click', clickCard));

function clickCard() {
	if(!lock) {
		if (this === x1) return;
		this.classList.add('upend');

		if (!cardIsUpside) {
			cardIsUpside = true;
			x1 = this;
		} else {
			cardIsUpside = false;
			x2 = this;	
		
			if (x1.dataset.name === x2.dataset.name) {
				x1.removeEventListener('click', clickCard);
				x2.removeEventListener('click', clickCard);
			} else {		
				lock = true;
				setTimeout(()=> {
					x1.classList.remove('upend');
					x2.classList.remove('upend');

					lock = false;
					cardIsUpside = false;
					x1 = null;
					x2 = null;

				}, 1000);
			}
		}
	}
}

(function cardPosition() {
	mem_cards.forEach(card => {
    	var pos = Math.floor(Math.random() * 16);
    	card.style.order = pos;
  	});
})();