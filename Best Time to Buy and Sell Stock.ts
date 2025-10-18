function findMax(profit: number[]): number {
  let max: number = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < profit.length; i++) {
    if (profit[i] > max) {
      max = profit[i];
    }
  }
  return max;
}

function maxProfit_(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
}
