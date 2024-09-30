
(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*		Sticky Header JS		*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		/*		Search JS		*/ 
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*		Mobile Menu		*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
		/*		Hero Slider JS		*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*		Testimonial Slider JS	*/ 
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*		Portfolio Slider JS		*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*		Counter Up JS	*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*		Clients Slider JS	*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*		Single Portfolio Slider JS		*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*		Accordion JS	*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*		Nice Select JS	*/ 	
		$('select').niceSelect();
		
		/*		Date Picker JS	*/ 
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
		
		
		
		/*		Checkbox JS	*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*		Right Bar JS		*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		
		/*		Video Popup JS	*/ 
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		/*		Wow JS	*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*		Scroll Up JS	*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*	Animate Scroll JS	*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*	Stellar JS	*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		/*	Google Maps JS	*/
		var map = new GMaps({
				el: '#map',
				lat: 23.011245,
				lng: 90.884780,
				scrollwheel: false,
			});
			map.addMarker({
				lat: 23.011245,
				lng: 90.884780,
				title: 'Marker with InfoWindow',
				infoWindow: {
				content: '<p>welcome to Mediplus</p>'
			}
		
		});
	});
	
	/*	Preloader JS */
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);

/* Contact Form validation in real time  */

document.addEventListener("DOMContentLoaded", function(){
	const form = document.getElementById("contactForm");
	const summaryContect = document.getElementById("summaryContect");
	const confirmationMessage = document.getElementById("confirmationMessage");
	form.addEventListener("submit", function(event){
		event.preventDefault(); 

		/* clear previous errors  */
		document.querySelectorAll('.error').forEach(e => e.remove());

		/* Capture form data */
		const first_name = form.elements["first_name"].value;
		const last_name = form.elements["last_name"].value;
		const email = form.elements["email"].value;
		const phone = form.elements["phone"].value;
	    const subject = form.elements["subject"].value;
	    const message = form.elements["message"].value;
		const gender = document.querySelector('input[name="Gender"]:checked');

		/* Validate data */
		let isValid = true;
		if(first_name.value.trim()===""){
			showError(first_name, "Please enter your first name.");
			isValid = false;
		}

		if(last_name.value.trim()===""){
			showError(last_name, "Please enter your last name");
			isValid = false;
		}

		if(!validateEmail(email)){
			showError("Please enter a valid email address.");
			isValid = false;
		}

		if(subject.value.length < 10){
			showError(message, "Message must be above 10 characters");
			isValid = false;
		}

		const ageNum = parseInt(age.value);
		if(isNaN(ageNum)){
			showError(age, "Please enter a valid age");
			isValid = false;
		}

		if(!gender){
			showError(document.querySelector('fieldset'), "Please select your gender");
			isValid = false;
		}

		if(isValid){
			alert('Registration Successful');

			form.submit(); /* Submit the form if all validations pass */

			/* Reset the form */
			form.requestFullscreen();
		}
	});

	form.elements["email"].addEventListener("input", function(){
		const email = form.elements["email"].value;
		if(!validateEmail(email)){
			confirmationMessage.textContent = "Invalid email formart";
			confirmationMessage.className = "error";
		}else{
			confirmationMessage.textContent = "";
		}
	});

	function validateEmail(email){
		const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return re.test(String(email).toLowerCase);
	}

	function showError(field, message){
		const error = document.createElement('p');
		error.className = 'error';
		error.innerText = message;
		field.parentNode.insertBefore(error, field.nextSibling);
	}
});
