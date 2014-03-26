//Comment out line 5 to see JavaScript syntax highlighting

var multiline = function(string) { return string.toString().replace(); };

var content = multiline(function() {/*	

	var WorkLena = LenaNiznik.extend({
		defaults: {
			mood: 'positive',
			test: 'driven', 
			persistent: true,
			contactInfo: { email: 'yniznik@gmail.com', github: '/kinzin', linkedin: '/yniznik' }
		},
		initialize: function(){
      drink(new Coffee( self.weight ));
		},
		projects: [
			{ 
 			  name:    'Secret Sauce @ Spoon University', 
 			  snapshot:'/secret-sauce.png'
	    	url:     'http://spoonuniversityX.com', 
	    	github:  'https://github.com/sarahadler/secret-sauce',
	    	tagline: 'Get rolling with Spoon U!',
	    	concept: 'An internal e-training tool for all student members of Spoon University, a food website and network for students with chapters on 30+ campuses across the country. The Secret Sauce app functions as the student\'s orientation, tracks progress, and provides networking resources and ideas throughout the student\'s time at Spoon University.'
	    }, 
	 		{ 
 			  name:    'LikesMe', 
 			  snapshot:'/likes-me.png'
	    	url:     'http://likes-me.herokuapp.com', 
	    	github:  'https://github.com/kinzin/likes_me',
	    	tagline: 'Find your best facebook photos!',
	    	concept: 'LikesMe solves the problem of not knowing which photos to post on a dating profile or personal bio page. It uses facebook\'s graph API to pull your most recent photos and sort them based on \'Likes\' to find the most winning ones.'
	    }, 
	    { 
	      name:    'Vitriol', 
	      snapshot:'/vitriol.png'
	    	url:     'http://vitriol.herokuapp.com', 
	    	github:  'https://github.com/ebesser/fuchsia',
	    	tagline: 'Because the internet needs more fights!', 
	    	concept: 'A \'reddit\'-like forum for digital debate that fosters community by requiring that participants pick either the For or Against side of an argument, and literally take jabs at the opposing team.'
	 		}
	    ] 
	});

	var WorkLenaView = LenaNiznik.View.extend({
		openResume: function(){
		   window.open('resume.pdf','_newtab');
		}
	});


*/});


var rows = content.split("\n");
rows.shift();
var array = [];
for( i = 1; i < rows.length-1; i++ ) {
	array.push(i);
	array.push(rows[i]);
};
body_text = array.join(" ").replace(/\s/g, '');



