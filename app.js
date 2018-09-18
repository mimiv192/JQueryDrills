$(document).ready(function () {
    console.log("ready!");
    const btnSubmit = $("#btnSubmit");
    const textInput = $("#textInput")
    const $div= $("<div></div>");
    
    const $ul= $('<ul></ul>');
    $ul.appendTo($('body'));

    btnSubmit.click(function (e) {
        e.preventDefault();
        const li = $(`<li>${textInput.val()}</li>`);
        li.appendTo($ul);
    })
    textInput.keyup(function () {
        if ($(this).val() == '') {
            $('.enableOnInput').prop('disabled', true);
        } else {
            //If there is text in the input, then enable the button
            $('.enableOnInput').prop('disabled', false);
        }
    });
});


$('.random').css('color', localObj.color);
$(".master").dblclick(function () {
    $(this).remove();
});