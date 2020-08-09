$(document).ready(function () {
    $('#view1').on({
        mouseenter: function () {
            $(this).css('background-color', 'blue')
        },
        mouseleave: function () {
            $(this).css('background-color', 'red')
        }
    })
})
$(document).ready(function (){
    $('#tx1').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx2').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx3').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx4').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx5,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx5').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx4,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx4,#tx6,#tx7,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx6').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx7,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx7,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx7').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx8,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx8,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx8').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx9,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx9,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx9').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx10').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx10').css('color', 'white')
        }
    })
})
$(document).ready(function (){
    $('#tx10').on({
        mouseenter: function () {
            $(this).css('color','white')
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9').css('color', 'gray')
        },
        mouseleave: function () {
            $('#tx1,#tx2,#tx3,#tx4,#tx5,#tx6,#tx7,#tx8,#tx9').css('color', 'white')
        }
    })
})
$(document).ready(function(){
    $('.sctnn').on({
        mouseenter:function(){
            $(this).css('color', 'darkgray')
        },
        mouseleave: function(){
            $(this).css('color','black')
        }
    })
})
$(document).ready(function(){
    $('.fa-inverse').on({
        mouseenter: function(){
            $(this).css('color','rgb(223, 219, 219)')
        },
        mouseleave:function(){
            $(this).css('color','white')
        }
    })
})
$(document).ready(function(){
    $('.icnn').on({
        mouseenter: function(){
            $(this).css('color','rgb(223, 219, 219)')
        },
        mouseleave:function(){
            $(this).css('color','rgb(119, 118, 114)')
        }
    })
})

