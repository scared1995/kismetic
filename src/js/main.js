$(document).ready(() => {
    $('#banner-slider').slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus");
            var $quantityArrowPlus = $(".quantity-arrow-plus");
            var $quantityNum = $(".quantity-num");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();

    });

});