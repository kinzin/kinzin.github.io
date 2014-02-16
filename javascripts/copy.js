//Comment out line 5 to see proper highlighting

var multiline = function(string) { return string.toString().replace(); };

var homepage = multiline(function() {/*	

	var WorkLena = LenaNiznik.extend({
		defaults: {
			mood:    'positive',
			test:    'driven', 
			catchphrase: 

		},
		initialize: function(){
            drink(coffee( self.weight ));
		},
		projects: [
	 		{ 
	 			name:    'LikesMe', 
		    	url:     'http://likes-me.herokuapp.com', 
		    	github:  'https://github.com/kinzin/likes_me',
		    	tagline: 'Find your best facebook photos!', 
		    	concept: 'LikesMe solves the problem of not knowing which photos to post on a dating profiles or personal bio page. It uses facebook\'s graph API to pull your most recent photos and sort them based on \'Likes\' to find the most winning ones.'
		    }, 
		    { 
		      	name:    'Vitriol', 
		    	url:     'http://vitriol.herokuapp.com', 
		    	github:  'https://github.com/ebesser/fuchsia'
		    	tagline: 'Because the internet needs more fights!', 
		    	concept: 'A \'reddit\'-like forum for digital debate that fosters community by requiring that participants pick either the For or Against side of an argument, and literally take jabs at the opposing team.'
	 		}
	    ] 
	});

	var WorkLenaView = LenaNiznik.View.extend({
		openResume: function(){
		   window.open('resume.pdf','_newtab');
		},
		contactInfo: { email: 'yniznik@gmail.com', github: '/kinzin', linkedin: '/yniznik'}
	});




*/});


var rows = homepage.split("\n");
rows.shift();
var new_array = [];
for( i = 1; i < rows.length-1; i++ ) {
	new_array.push(i);
	new_array.push(rows[i]);
};
homepage_text = new_array.join(" ").replace(/\s/g, '');



