
var main = function() {
	$('li').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.whitestroke').remove();
		var job_post = $(this).children('.job-post').clone();
		job_post.attr('style', 'display: inline');
		job_post.addClass('whitestroke');
		$('.jumbotron').children('.container').append(job_post);
		$('.jumbotron').css('background-image', 'url('+ job_post.attr('backgroundimage') +')');
	});
}

$(document).ready(main);