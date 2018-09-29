module.exports = function getZerosCount(number, base) {
  let n = number;
  let b = base;

  for (let i = 2; i <= b; i++){  //вывод простого числа https://learn.javascript.ru/task/list-primes
    if(b % i == 0){ 
      let a = 0;
      let c = number;
      let d = 0;

      while(b % i == 0){  //раделение на множетели http://www.sql.ru/forum/1178053/bystryy-algoritm-razlozheniya-chisla-na-prostye-mnozhiteli
        b = Math.floor(b / i);
        a++;
      }

      while(c / i > 0) {  //нахождение нулей task#7
        d = d + Math.floor(c / i);
        c = Math.floor(c / i);
      }
      
      n = Math.min(n, Math.floor(d / a));
    }
  }
  return n;
}