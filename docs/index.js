$(document).ready(() => {
    $('.table-of-contents ul li ul').hide()
    $(".table-of-contents ul li").mouseover(() => {
        $(this).parent(".table-of-contents").children("li").children("ul").slideToggle("200")
        $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down")
    })
})