$(document).ready(function() {
    var cNote = document.getElementById('cAudio');
    $('#c').mouseover(function(){
       cNote.currentTime = 0;
        cNote.play();
    });
    var dNote = document.getElementById('dAudio');
    $('#d').mouseover(function(){
       dNote.currentTime = 0;
        dNote.play();
    });
    var eNote = document.getElementById('eAudio');
    $('#e').mouseover(function(){
       eNote.currentTime = 0;
        eNote.play();
    });
    var fNote = document.getElementById('fAudio');
    $('#f').mouseover(function(){
       fNote.currentTime = 0;
        fNote.play();
    });
    var gNote = document.getElementById('gAudio');
    $('#g').mouseover(function(){
       gNote.currentTime = 0;
        gNote.play();
    });
    var aNote = document.getElementById('aAudio');
    $('#a').mouseover(function(){
       aNote.currentTime = 0;
        aNote.play();
    });
    var bNote = document.getElementById('bAudio');
    $('#b').mouseover(function(){
       bNote.currentTime = 0;
        bNote.play();
    });
    
    $(document).keydown(function(key){
        if(key.which == 65){
            aNote.currentTime = 0;
            aNote.play();
            $('#a').addClass('active');
        } else if(key.which == 66){
            bNote.currentTime = 0;
            bNote.play();
            $('#b').addClass('active');
        } else if(key.which == 67){
            cNote.currentTime = 0;
            cNote.play();
            $('#c').addClass('active');
        } else if(key.which == 68){
            dNote.currentTime = 0;
            dNote.play();
            $('#d').addClass('active');
        } else if(key.which == 69){
            eNote.currentTime = 0;
            eNote.play();
            $('#e').addClass('active');
        } else if(key.which == 70){
            fNote.currentTime = 0;
            fNote.play();
            $('#f').addClass('active');
        } else if(key.which == 71){
            gNote.currentTime = 0;
            gNote.play();
           $('#g').addClass('active');
        }
    });
         $(document).keyup(function(key){
        if(key.which == 65){
            
            $('#a').removeClass('active');
          
        } else if(key.which == 66){
        
            $('#b').removeClass('active');
            
        } else if(key.which == 67){
            
            $('#c').removeClass('active');
            
        } else if(key.which == 68){
            
            $('#d').removeClass('active');
           
        } else if(key.which == 69){
            
            $('#e').removeClass('active');
            
        } else if(key.which == 70){
            
            $('#f').removeClass('active');
           
        } else if(key.which == 71){
            
            $('#g').removeClass('active');
            
        }
              
    });
    
});