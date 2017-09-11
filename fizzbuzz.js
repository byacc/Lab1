function fizzBuzz(x, y) {
	if (x < y) {
		for ( i = x; i < y; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				return "FizzBuzz";
			} else if (i % 3 == 0) {
				return "Fizz";
			} else if (i % 5 == 0) {
				return "Buzz";
			}else{
				return toString();
			}
		}
	}else{
		throw new RangeError("Invalid range (start < end)");
	}
}