$(document).ready(() => {
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

    $('.category-description').click((e) => {
        let currentElement = $(e.target);
        $('.description-product').hide();
        let id = currentElement.data('id')
        $('#' + id).show();

        $('.category-description').removeClass('active');
        $(currentElement).addClass('active');

        $('#' + id + ' .category-description').slick('refresh');

    });
});