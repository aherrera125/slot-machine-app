class SlotModel {
  constructor() {
    this.coins = 20; // Start with 20 coins
  }

  deductCoin() {
    if (this.coins > 0) {
      this.coins -= 1;
    }
  }

  addCoins(amount) {
    this.coins += amount;
  }

  getCoins() {
    return this.coins;
  }
}

module.exports = SlotModel;
