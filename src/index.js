// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let H = 50;
  let Q = 25;
  let D = 10;
  let N = 5;
  let P = 1;
  let coins = {"H":0,"Q":0,"D":0,"N":0,"P":0};
  let a={}
   if (currency > 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
   }
  while(currency>0){
    if(currency>=H){
      currency-=H;
      coins.H++;
    }else if(currency>=Q){
      currency-=Q;
      coins.Q++;
    }else if(currency>=D){
      currency-=D;
      coins.D++;
    }else if(currency>=N){
      currency-=N;
      coins.N++;
    }else{
      currency-=P;
      coins.P++;
    }
  }
  if(coins.H==0)delete coins.H;
  if(coins.Q==0)delete coins.Q;
  if(coins.D==0)delete coins.D;
  if(coins.N==0)delete coins.N;
  if(coins.P==0)delete coins.P;
  return (coins)

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
