$(function() {
	$('#portrait2').on('mouseover', smile)
	$('.about-link').on('click', smile)
	$('.nav-link').on('click', scrollDown)
	$('.go-back').on('click', backToTop)
});



/////////////////////////////////
// Makes portrait smile creepily. Happy Halloween!
/////////////////////////////////
function smile() {
	$('#portrait2').toggleClass('smile')
	setTimeout(() => {
		$('#portrait2').toggleClass('smile')
	}, 1500)
}



/////////////////////////////////
// Scroll down
/////////////////////////////////
function scrollDown(e) {
	e.preventDefault()

	displayBackButton()

	// Every section is assigned an id that is also in the link
	let link = $(this).attr('href')
	let section = document.getElementById(link.split("#")[1])

	section.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
}



/////////////////////////////////
// Scroll back up and hide back button
/////////////////////////////////
function backToTop() {
	document.getElementById('intro')
	intro.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})

	$('.go-back').removeClass('make-visible')
}



/////////////////////////////////
// Make back button visible
/////////////////////////////////
function displayBackButton() {
	$('.go-back').addClass('make-visible')
}
