import $ from 'jquery'
 console.log($)

 const $button1 = $('#add1');
 const $button2 = $('#minus1');
 const $button3 = $('#mul2');
 const $button4 = $('#divide');
 const $number = $('#number');
 let num = localStorage.getItem("n");
 $number.text(num||100)
 $button1.on('click',()=>{
    let n = parseInt($number.text());
        $number.text(++n)
        localStorage.setItem("n",n);
 })
 $button2.on('click',()=>{
    let n = parseInt($number.text());
        $number.text(--n);
        localStorage.setItem("n",n);
 })
 $button3.on('click',()=>{
    let n = parseInt($number.text());
    n = n*2;
        $number.text(n);
        localStorage.setItem("n",n);
 })
 $button4.on('click',()=>{
    let n = parseInt($number.text());
    n = n/2;
    $number.text(n);
    localStorage.setItem("n",n);
 })