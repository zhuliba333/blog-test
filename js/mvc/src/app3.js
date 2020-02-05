import $ from 'jquery'
 const $clickDiv = $('#app3 .square');
 $clickDiv.on('click',(e)=>{//点击的是哪个元素，
    $clickDiv.toggleClass('animate')
 })
