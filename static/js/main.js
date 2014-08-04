$('document').ready(function(){

	 var feed = new Instafeed({
        get: 'user',
        userId: 5415215,
        target: 'instagramContainer',
        accessToken: '5415215.467ede5.97a2d59677b747a7b7d0409faa3c4eb3',
        limit: 8
    });

    feed.run();

    tivs.gitHub.init({
    	target: $('#codeContainer')
    })

});


tivs = window.tivs || {};

tivs.gitHub = (function(){

	var url = 'https://api.github.com/users/tiveron/repos';

	var getRepo = function( target ){
		$.getJSON( url, function( data ) {

			var html = '<ul id="repoList">';

			for( project in data ) {

				html += [
					'<li>',
						'<a href="'+ data[project].html_url +'">',
							data[project].name,
						'</a>',
					'</li>'
				].join('');
			}

			html += '</ul>';

			target.append( html );

		});
	}


	return {
		init: function( config ) {
			getRepo( config.target );
		}
	};

})();