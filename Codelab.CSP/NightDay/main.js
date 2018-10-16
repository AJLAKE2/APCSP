$(document).ready(function () {
    $('#orb').click(function () {
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        } else {
            $(this).removeClass('moon').addClass('sun');
        }

        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }
        if ($('#horb2').hasClass('gone')) {
            $('#horb2').removeClass('gone').addClass('drkmerc');
        } else {
            $('#horb2').removeClass('drkmerc').addClass('gone');
        }
        
        if ($('[id^=moonspot]').hasClass('visible')) {
            $('[id^=moonspot]').removeClass('visible');
        } else {
            $('[id^=moonspot]').addClass('visible');
        }
        
         if ($('[id^=monspot]').hasClass('orvisible')) {
            $('[id^=monspot]').removeClass('orvisible');
        } else {
            $('[id^=monspot]').addClass('orvisible');
        }
        
        if ($('#horb4').hasClass('gone')) {
            $('#horb4').removeClass('gone').addClass('blank');
        } else {
            $('#horb4').removeClass('blank').addClass('gone');
        }
        
        if ($('#horb3').hasClass('gone')) {
            $('#horb3').removeClass('gone').addClass('half');
        } else {
            $('#horb3').removeClass('half').addClass('gone');
        }
        
         if ($('#orb2').hasClass('merc')) {
            $('#orb2').removeClass('merc').addClass('blank');
        } else {
            $('#orb2').removeClass('blank').addClass('merc');
        }
        
        if ($('[id^=mooonspot]').hasClass('smile')) {
            $('[id^=mooonspot]').addClass('smile');
        } else {
            $('[id^=mooonspot]').removeClass('smile');
        }
        
        if ($('#bborb').hasClass('plu')) {
            $('#bborb').removeClass('plu').addClass('ple');
        } else {
            $('#bborb').removeClass('ple').addClass('plu');
        }
    });
});
