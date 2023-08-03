//Write a program to add two integers to be taken as string and which returns a string
//and come up with the test cases to verify the output
function addNumbers (val_a, val_b){
    let ans = '';
    let carry = 0;
    let i = val_a.length - 1;
    let j = val_b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digit_a = i >= 0 ? parseInt(val_a[i]) : 0;
        const digit_b = j >= 0 ? parseInt(val_b[j]) : 0;
        const sum = digit_a + digit_b + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;
    }

    return result;
}

const val_a = "1213";
const val_b = "1234";
const sum = addNumbers(val_a , val_b);
console.log(sum);

//answer by Chaitanya Sharma