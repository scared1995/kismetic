$('.gods-block-btn').click(function () {
    if (!$('#name').val()) {
        return $('#feedback-alert').show();
    }
    if (!$('#mail').val()) {
        return $('#feedback-alert').show();
    }
    if (!$('#comment').val()) {
        return $('#feedback-alert').show();
    }
    $('#feedback-alert').hide();
    alert("Ваше письмо отправлено!")
});
