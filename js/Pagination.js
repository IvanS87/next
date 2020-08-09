$(function()
{
    var button = $('.pagination__item');

    function switchToNext()
    {
        var _this = $(this);

        if(_this.hasClass('pagination__item-active'))
            return false;
        else
        {
            $('.pagination__item.pagination__item-active').removeClass('pagination__item-active');
            _this.addClass('pagination__item-active');
        }
    }

    button.on('click',switchToNext);
});
