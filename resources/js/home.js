/**
 * Home page JS namespace
 * Author : Djebien tarik
 * version : 01/08/2013
 */
var home = {
			
		// Start carroussel
		playCarroussel : function(frequency) {
			$('#myCarousel').carousel({
				interval : frequency
			});
		}
	
};
home.playCarroussel(3000);