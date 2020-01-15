$('#goods-container-search').click(function (e) {
        $('#dropdown-search').show();

    $(document).ready(function () {

        $("#search").keyup(function () {
            _this = this;

            $.each($(".dropdown-container"), function () {
                if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        });
    });
});

$('.open-basket').click(function () {
    $('#basket-container').fadeToggle();

});
