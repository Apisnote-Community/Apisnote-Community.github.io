<script>

$(function(){

var header = $('header-5')

header_offset = header.offset();

header_height = header.height();

$(window).scroll(function () {

if($(window).scrollTop() > header_offset.top + header_height) {

header.addClass('scroll');

}else {

header.removeClass('scroll');

}

});

});

</script>
