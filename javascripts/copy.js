//Comment out line 5 to see JavaScript syntax highlighting

var multiline = function(string) { return string.toString().replace(); };

var content = multiline(function() {/*	

	var WorkLena = LenaNiznik.extend({
		defaults: {
			mood: 'positive',
			test: 'driven', 
			persistent: true

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
		    	concept: 'LikesMe solves the problem of not knowing which photos to post on a dating profile or personal bio page. It uses facebook\'s graph API to pull your most recent photos and sort them based on \'Likes\' to find the most winning ones.'
		    }, 
		    { 
		      	name:    'Vitriol', 
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
		},
		contactInfo: { email: 'yniznik@gmail.com', github: '/kinzin', linkedin: '/yniznik'}
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



