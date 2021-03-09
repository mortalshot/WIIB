const button = document.querySelector('#offersWorldwide');
const tooltip = document.querySelector('#offersWorldwideContent');

const popperInstance = Popper.createPopper(button, tooltip, {
    placement: 'bottom',
});

$('.popper__btn').click(function(e) {
    $(this).closest('.popper').toggleClass('active');
})