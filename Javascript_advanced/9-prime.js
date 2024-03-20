const t0 = performance.now();
function countPrimeNumbers(){
    let count = 0;
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }
    for(let i = 2;i<=100;i++){
        if(isPrime(i))
            count++;
    }
    return count;
}
countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1-t0} milliseconds.`)