// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   let o = {};
    if (currency <= 0){
        o = {}
    } else if (currency>10000) {
        o = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else {
        let h = Math.floor(currency/50);
        currency -= h * 50;
        let q = Math.floor(currency/25);
        currency -= q * 25;
        let d = Math.floor(currency/10);
        currency -= d * 10;
        let n = Math.floor(currency/5);
        let p = currency - n * 5;
        if (h){
            o.H = h;
      }
      if (q){
            o.Q = q;
      }
      if (d){
            o.D = d;
      }
      if (n){
          o.N = n;
    }
    if (p){
          o.P = p;
    }
    }
    return(o);
}