var WorkLena = LenaNiznik.extend({
	defaults: {
	    mood: 'positive',
	    test: 'driven',
	    catchphrase: 
    },
    initialize: function(){

    },
    projects: [
 		{ 
 			name:    'LikesMe', 
	    	url:     'http://likes-me.herokuapp.com', 
	    	github:  'https://github.com/kinzin/likes_me'
	    	tagline: 'Find your best facebook photos!', 
	    	concept: 'LikesMe solves the problem of not knowing which photos to post on a dating 
	    			  profiles or personal bio page. It uses facebook\'s graph API to pull your most 
	    	          recent photos and sort them based on \'Likes\' to find the most winning ones.'
	    }, 
	    { 
	      	name:    'Vitriol', 
	    	url:     'http://vitriol.herokuapp.com', 
	    	github:  'https://github.com/ebesser/fuchsia'
	    	tagline: 'Because the internet needs more fights!', 
	    	concept: 'A \'reddit\'-like forum for digital debate that fosters community by requiring 
	    	          that participants pick either the For or Against side of an argument, and literally 
	    	          "take jabs" at the opposing team.'
 		}
    ] 
}

var WorkLenaView = LenaNiznik.View.extend({
	openResume: function(){
	   window.open('resume.pdf','_newtab');
	},
	contactInfo: { email: 'yniznik@gmail.com', github: '/kinzin', linkedin: '/yniznik'},
})

