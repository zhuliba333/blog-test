import $ from 'jquery'


 const $tabBar = $('#app2 .tab-bar');
 const $tabContent = $('#app2 .tab-content');

 $tabBar.on('click','li',(e)=>{//点击的是哪个元素，
    console.log(e.target)//如果li里面有span，点击span，console.log出来的是span
    console.log(e.currentTarget)//如果li里面有span，点击span，console.log出来的是LI
    const $li = $(e.currentTarget);
    const index = $li.index();//获取第几个子元素
    // $tabContent.children().eq(index).css({display:'block'}).siblings().css({display:'none'})//不要用cssApi
    // $tabContent.children().eq(index).show().siblings().hide();//不要用show和hide的api

    //用类来操作.样式与行为分离
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active');//不要用show和hide的api
    $li.addClass('selected').siblings().removeClass('selected');
 })
 $tabBar.children().eq(0).click();