import $ from 'jquery'
 const $clickDiv = $('#app4 .circle');
 $clickDiv.on('mouseenter',(e)=>{
    $clickDiv.addClass('animate')
 })

 $clickDiv.on('mouseleave',(e)=>{
    $clickDiv.removeClass('animate')
 })

