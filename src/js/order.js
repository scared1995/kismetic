$('.gods-block-btn').click(function () {
    if (!$('#name').val()) {
        return $('.alert').show();
    }
    if (!$('#phone').val()) {
        return $('.alert').show();
    }
    if (!$('#city').val()) {
        return $('.alert').show();
    }
    if (!$('#pickup').prop("checked") && !$('#delivery').prop("checked")) {
        return $('.alert').show();
    }
    $('#order').hide();
    $('#thank').show();
});
