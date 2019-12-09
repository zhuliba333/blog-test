//请写一个 min 函数，要求 min(numbers) 能返回数组 numbers 中的最小数字。
function min (arr) {
	if (!Array.isArray(arr) || arr.length == 0) {
		console.log('非法数据');
		return false;
	}
	let min = arr[0];
	for (var i = 1, l = arr.length; i < l; i++)
		if (min > arr[i]) {
			min = arr[i];
		}
	return min;
}
//请写出一个 sort 函数，要求 sort(numbers) 能返回一个把 numbers 从小到大排列的数组（你可以添加多余的帮助函数）
function sort (arr, newArr = []) {
	if (!Array.isArray(arr) || arr.length == 0) {
		console.log('非法数据');
		return false;
	}
	if (arr.length == 1) {
		newArr = newArr.concat(arr.splice(0, 1));
		console.log(newArr);
	} else {
		let Index = arr.indexOf(min(arr))
		if (Index !== -1) {
			newArr = newArr.concat(arr.splice(Index, 1));
		}
		sort(arr, newArr);
	}
}
sort([4, 7, 9, 1, 3, 3])


//第二种
let min = (numbers) => {
	if (numbers.length > 2) {
		return min(
			[numbers[0], min(numbers.slice(1))]
		)
	} else {
		return Math.min.apply(null, numbers)
	}
}


let minIndex = (numbers) =>
	numbers.indexOf(min(numbers))


let sort = (numbers) => {
	if (numbers.length > 2) {
		let index = minIndex(numbers)
		let min = numbers[index]
		numbers.splice(index, 1)
		return [min].concat(sort(numbers))
	} else {
		return numbers[0] < numbers[1] ? numbers :
			numbers.reverse()
	}
}


let sort = (numbers) => {
	if (numbers.length > 2) {
		let index = minIndex(numbers)
		let min = numbers(index)
		numbers.aplice(index, 1)
		return [min].concat(sort(numbers))
	} else {
		return numbers[0] < numbers[1] ? numbers : (numbers.revers())
	}
}
let minIndex = (numbers) => {
	numbers.indexOf(min(numbers))
}