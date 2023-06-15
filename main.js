'use strict';
var link1=document.getElementById('link1');
var link2=document.getElementById('link2');
var link3=document.getElementById('link3');
var link4=document.getElementById('link4');

var block1=document.getElementById('block1');
var block2=document.getElementById('block2');
var block3=document.getElementById('block3');
var block4=document.getElementById('block4');

var blockAR = [block1, block2, block3, block4];

link1.onclick=()=>{show(0)}
link2.onclick=()=>{show(1)}
link3.onclick=()=>{show(2)}
link4.onclick=()=>{show(3)}

function show(i){
    blockAR.forEach(cheack);
    function cheack(el, n){
        if (n === i) el.style.display='block';
        else el.style.display='none';
    }
}
show (0);