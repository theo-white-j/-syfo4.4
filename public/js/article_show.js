$(document).ready(function () {
	// body...
	$('.js-like-article').on('click', function(e){
		e.preventDefault();

		var $link=$(e.currentTarget);
		$link.toggleClass('fa-heart-o fa-heart');

		$.ajax({
			method: 'POST',
			url: $link.attr('href')
		}).done(function(data){
			$('.js-like-article-count').html(data.hearts);
		});

		$('.js-like-article-count').html('TEST');
	});
});