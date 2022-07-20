'use strict'

let x = document.getElementById('downland');
let y = document.getElementsByClassName('lili');
let allbut = document.getElementById('butall');
let designbut = document.getElementById('designBut');
let devbut = document.getElementById('develbut');
let pbut = document.getElementById('printbut');
let n1pic = document.getElementById('girln2');
let n2pic = document.getElementById('n1picture');
let n3pic = document.getElementById('n3picture');
let n4pic = document.getElementById('n4picture');
let n5pic = document.getElementById('n5picture');
let n6pic = document.getElementById('n6picture');
let n1link = document.getElementById('homeLink');
let n2link = document.getElementById('serviceLink');
let n3link = document.getElementById('feutersLink');
let n4link = document.getElementById('workssLink');
let n5link = document.getElementById('pricingLink');
let n6link = document.getElementById('teamLink');
let n7link = document.getElementById('contactLink')



function myover(){
   x.style.backgroundColor = '#23c197';
}
function myout(){
    x.style.backgroundColor = '#61d2b4';
}
function myALL(){

    designbut.style.backgroundColor = '#61d2b4';
    designbut.style.color = 'white';
    designbut.style.border = 'none';

    devbut.style.backgroundColor = '#61d2b4';
    devbut.style.color = 'white';
    devbut.style.border = 'none';

    pbut.style.backgroundColor = '#61d2b4';
    pbut.style.color = 'white';
    pbut.style.border = 'none';

    allbut.style.backgroundColor = 'white';
    allbut.style.color = '#61d2b4';
    allbut.style.border = '2px groove  rgb(97, 210, 180)';

    n1pic.style.display = 'inline-block';
    n2pic.style.display = 'inline-block';
    n3pic.style.display = 'inline-block';
    n4pic.style.display = 'inline-block';
    n5pic.style.display = 'inline-block';
    n6pic.style.display = 'inline-block';
}
function myDesign(){
    devbut.style.backgroundColor = '#61d2b4';
    devbut.style.color = 'white';
    devbut.style.border = 'none';

    pbut.style.backgroundColor = '#61d2b4';
    pbut.style.color = 'white';
    pbut.style.border = 'none';

    allbut.style.backgroundColor = '#61d2b4';
    allbut.style.color = 'white';
    allbut.style.border = 'none';

    designbut.style.backgroundColor = 'white';
    designbut.style.color = '#61d2b4' ;
    designbut.style.border = '2px groove  rgb(97, 210, 180)';

    n2pic.style.display = 'none';
    n1pic.style.display = 'inline-block';
    n3pic.style.display = 'none';
    n4pic.style.display = 'inline-block';
    n5pic.style.display = 'none';
    n6pic.style.display = 'inline-block';
}
function mydeve(){
    allbut.style.backgroundColor = '#61d2b4';
    allbut.style.color = 'white';
    allbut.style.border = 'none';

    pbut.style.backgroundColor = '#61d2b4';
    pbut.style.color = 'white';
    pbut.style.border = 'none';

    designbut.style.backgroundColor = '#61d2b4';
    designbut.style.color = 'white';
    designbut.style.border = 'none';

    devbut.style.backgroundColor = 'white';
    devbut.style.color = '#61d2b4' ;
    devbut.style.border = '2px groove  rgb(97, 210, 180)';

    n2pic.style.display = 'inline-block';
    n1pic.style.display = 'none';
    n3pic.style.display = 'inline-block';
    n4pic.style.display = 'none';
    n5pic.style.display = 'inline-block';
    n6pic.style.display = 'none';
}
function myprint(){
    devbut.style.backgroundColor = '#61d2b4';
    devbut.style.color = 'white';
    devbut.style.border = 'none';

    allbut.style.backgroundColor = '#61d2b4';
    allbut.style.color = 'white';
    allbut.style.border = 'none';

    designbut.style.backgroundColor = '#61d2b4';
    designbut.style.color = 'white';
    designbut.style.border = 'none';

    pbut.style.backgroundColor = 'white';
    pbut.style.color = '#61d2b4' ;
    pbut.style.border = '2px groove  rgb(97, 210, 180)';

    n2pic.style.display = 'none';
    n1pic.style.display = 'none';
    n3pic.style.display = 'inline-block';
    n4pic.style.display = 'inline-block';
    n5pic.style.display = 'inline-block';
    n6pic.style.display = 'none';
}



var btn =  document.getElementById('arrow1');




window.onscroll = function(){
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

    function myfUNC(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scroll1);

function scroll1(){
    if(document.body.scrollTop >  150|| document.documentElement.scrollTop > 150){
        document.querySelector("nav").style.backgroundColor = "white";
        document.querySelector("#homeLink").style.color = 'black';
        document.querySelector("#serviceLink").style.color = 'black';
        document.querySelector('#feutersLink').style.color = 'black';
        document.querySelector('#workssLink').style.color = 'black';
        document.querySelector('#pricingLink').style.color = 'black';
        document.querySelector('#teamLink').style.color = 'black';
        document.querySelector('#pricingLink').style.color = 'black';
        document.querySelector('#contactLink').style.color = 'black';
    }
    else{
        document.querySelector("nav").style.backgroundColor = "transparent";
        document.querySelector("#homeLink").style.color = 'white';
        document.querySelector("#serviceLink").style.color = 'white';
        document.querySelector('#feutersLink').style.color = 'white';
        document.querySelector('#workssLink').style.color = 'white';
        document.querySelector('#pricingLink').style.color = 'white';
        document.querySelector('#teamLink').style.color = 'white';
        document.querySelector('#contactLink').style.color = 'white';
    }
}

function n1Linkfunct(){
    n2link.style.backgroundColor = '';
    n2link.style.borderRadius = '';
    
    
    n3link.style.backgroundColor = '';
    n3link.style.borderRadius = '';

    n4link.style.backgroundColor = '';
    n4link.style.borderRadius = '';

    n5link.style.backgroundColor = '';
    n5link.style.borderRadius = '';

    n6link.style.backgroundColor = '';
    n6link.style.borderRadius = '';

    n7link.style.backgroundColor = '';
    n7link.style.borderRadius = '';

    n1link.style.backgroundColor = '#61d2b4';
    n1link.style.borderRadius = '80px';
}
function n2Linkfunct(){
    n1link.style.backgroundColor = '';
    n1link.style.borderRadius = '';

    n3link.style.backgroundColor = '';
    n3link.style.borderRadius = '';

    n4link.style.backgroundColor = '';
    n4link.style.borderRadius = '';

    n5link.style.backgroundColor = '';
    n5link.style.borderRadius = '';

    n6link.style.backgroundColor = '';
    n6link.style.borderRadius = '';

    n7link.style.backgroundColor = '';
    n7link.style.borderRadius = '';

    n2link.style.backgroundColor = '#61d2b4';
    n2link.style.borderRadius = '80px';
}
 function n3Linkfunct(){
    n1link.style.backgroundColor = '';
    n1link.style.borderRadius = '';

    n4link.style.backgroundColor = '';
    n4link.style.borderRadius = '';

    n5link.style.backgroundColor = '';
    n5link.style.borderRadius = '';

    n6link.style.backgroundColor = '';
    n6link.style.borderRadius = '';

    n7link.style.backgroundColor = '';
    n7link.style.borderRadius = '';

    n2link.style.backgroundColor = '';
    n2link.style.borderRadius = '';

    n3link.style.backgroundColor = '#61d2b4';
    n3link.style.borderRadius = '80px';
 }
 function n4Linkfunct(){

    n1link.style.backgroundColor = '';
    n1link.style.borderRadius = '';

    n3link.style.backgroundColor = '';
    n3link.style.borderRadius = '';

    n5link.style.backgroundColor = '';
    n5link.style.borderRadius = '';

    n6link.style.backgroundColor = '';
    n6link.style.borderRadius = '';

    n7link.style.backgroundColor = '';
    n7link.style.borderRadius = '';

    n2link.style.backgroundColor = '';
    n2link.style.borderRadius = '';

    n4link.style.backgroundColor = '#61d2b4';
    n4link.style.borderRadius = '80px';
 }
function n5Linkfunct(){

    n1link.style.backgroundColor = '';
    n1link.style.borderRadius = '';

    n3link.style.backgroundColor = '';
    n3link.style.borderRadius = '';

    n4link.style.backgroundColor = '';
    n4link.style.borderRadius = '';

    n6link.style.backgroundColor = '';
    n6link.style.borderRadius = '';

    n7link.style.backgroundColor = '';
    n7link.style.borderRadius = '';

    n2link.style.backgroundColor = '';
    n2link.style.borderRadius = '';

    n5link.style.backgroundColor = '#61d2b4';
    n5link.style.borderRadius = '80px';
}
function n6Linkfunct(){
    n1link.style.backgroundColor = '';
    n1link.style.borderRadius = '';

    n3link.style.backgroundColor = '';
    n3link.style.borderRadius = '';

    n4link.style.backgroundColor = '';
    n4link.style.borderRadius = '';

    n7link.style.backgroundColor = '';
    n7link.style.borderRadius = '';

    n2link.style.backgroundColor = '';
    n2link.style.borderRadius = '';

    n5link.style.backgroundColor = '';
    n5link.style.borderRadius = '';

    n6link.style.backgroundColor = '#61d2b4';
    n6link.style.borderRadius = '80px';    
}
function n7Linkfunct(){

    n1link.style.backgroundColor = '';
    n1link.style.borderRadius = '';
    

    n3link.style.backgroundColor = '';
    n3link.style.borderRadius = '';

    n4link.style.backgroundColor = '';
    n4link.style.borderRadius = '';
    
    n2link.style.backgroundColor = '';
    n2link.style.borderRadius = '';

    n5link.style.backgroundColor = '';
    n5link.style.borderRadius = '';

    n6link.style.backgroundColor = '';
    n6link.style.borderRadius = '';

    n7link.style.backgroundColor = '#61d2b4';
    n7link.style.borderRadius = '80px';

}
































      