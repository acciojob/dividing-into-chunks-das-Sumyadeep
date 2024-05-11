const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	
let result = [][];
let ans = [];

let l = 0, r = 0;

while(r < arr.length){
	
	sum += arr[r];

	if(sum > n){
		
		result.push(ans);
		
		while(l != r){
			sum -= arr[l];
			l++;
		}
	}

	ans.push(arr[r]);

	r++;
}

return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
