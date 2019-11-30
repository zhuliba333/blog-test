let demo = document.querySelector('#demo');
let styleDemo = document.querySelector('#styleDemo');
let string = `
/*test*/
#demo{
	width: 200px;
	color:red;
	word-break: break-all;
}
/*下面开始画太级*/
#demo2{
    position: fixed;
    left: 50%;
		top: 100px;
		transform: translateX(-50%);
		border: 1px solid green;
		width:300px;
		height:300px;
		border-radius:50%;
		background:linear-gradient(to right, white 50%,black 50%);
}
#demo2::before{
		content: '';
		display: block;
		width: 149px;
		height: 149px;
		position: absolute;
		left: 50%;
		background:black;
		transform: translate(-50%,0);
		border-radius: 50%;
		background: radial-gradient(circle, white 0%, white 25%, black 25%,black 100%);
}
#demo2::after{
    content: '';
		display: block;
		width: 149px;
		height: 149px;
		position: absolute;
		left: 50%;
		background:white;
		transform: translate(-50%,100%);
		border-radius: 50%;
		background: radial-gradient(circle, black 0%, black 25%, white 25%,white 100%);
}

`
	;
let string2 = '';

let n = 0;
let step = () => {
	setTimeout(() => {
		if (n === string.length) {
			return false;
		}
		console.log(n);
		var str = string.substr(n, 1);
		console.log('tt' + str + 'dd');
		if (str === '\n') {
			string2 += '<br/>'

		} else if (str === " ") {
			string2 += '&nbsp;'

		} else if (str === '\t') {
			string2 += '&nbsp;&nbsp;'

		} else {
			string2 += str;

		}
		demo.innerHTML = string2;
		styleDemo.innerHTML = string.substring(0, n);
		n++;
		window.scrollTo(0, 99999);
		step();
	}, 10);

}
step()