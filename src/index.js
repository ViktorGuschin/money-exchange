// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let obj = {};
  if (currency <= 0) {
    return obj;
  }
  if (currency > 10000) {
    return {
      error:
        "You are rich, my friend! We don't have so much coins for exchange",
    };
  }

  const H = Math.floor(currency / 50);
  const Q = Math.floor((currency - H * 50) / 25);
  const D = Math.floor((currency - H * 50 - Q * 25) / 10);
  const N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
  const P = currency - H * 50 - Q * 25 - D * 10 - N * 5;

  if (H > 0) {
    obj.H = H;
  }
  if (Q > 0) {
    obj.Q = Q;
  }
  if (D > 0) {
    obj.D = D;
  }
  if (N > 0) {
    obj.N = N;
  }
  if (P > 0) {
    obj.P = P;
  }
  return obj;
};
