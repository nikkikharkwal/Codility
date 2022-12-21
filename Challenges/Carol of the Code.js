// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function calculateRotate(color, a) {
	if(a[0] == color) {
		return 1;
	}
	
	if(a[1] == color) {
		return 0;
	}
	
	if(a[2] == color) {
		return 1;
	}
	
	return 2;
}


function solution(A) {
    // Implement your solution here

	let N = A.length;
	if(N == 1) {
		return 0;
	}
	
	let maxR = 2 * N + 1;
	let colors = ['W', 'R', 'G', 'B'];
	let blocks = [];
	for(let i=0; i<N; i++) {
		blocks[i] = {
			'W': maxR, 
			'R': maxR, 
			'G': maxR, 
			'B': maxR, 
		};		
	}
	
	let opposites = {
		0: 2,
		2: 0,
		1: 3,
		3: 1
	};
	
	
	let fb = blocks[0];
	let fa = A[0];
	for(let j=0; j<colors.length; j++) {
		let c = colors[j];
		fb[c] = calculateRotate(c, fa);
	}
	

	for(let i=1; i<N; i++) {
		let b1 = blocks[i-1];
		let b2 = blocks[i];
		
		let a1 = A[i - 1];
		let a2 = A[i];
		
		for(let j=0; j<colors.length; j++) {
			let c = colors[j];
			let min1 = b1[c];
			
			let oc_b2 = c;
			let oi_b2 = a2.indexOf(oc_b2);
			let i_b2 = opposites[oi_b2];
			let c_b2 = a2[i_b2];
			let r = calculateRotate(c_b2, a2);
			b2[c_b2] = Math.min(b2[c_b2], r + min1);
		}
	}
	
	

	let lb = blocks[N-1];

	let result = 2 * N;
	for(let j=0; j<colors.length; j++) {
		let c = colors[j];
		result = Math.min(result, lb[c]);
	}
	
	return result;
}
