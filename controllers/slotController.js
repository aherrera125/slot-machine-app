const SlotModel = require('../models/slotModel');
const SlotService = require('../services/slotService');

const slotService = new SlotService();
const slotModel = new SlotModel();

exports.handleSpin = (req, res) => {
  // Ensure the user has enough coins to spin
  if (slotModel.getCoins() <= 0) {
    return res.json({
      message: 'Not enough coins to spin.',
      remainingCoins: slotModel.getCoins(),
    });
  }

  // Deduct 1 coin for the spin
  slotModel.deductCoin();

  // Spin the reels and calculate winnings
  const spinResult = slotService.spinReels();
  const winnings = slotService.calculateWinnings(spinResult);

  // Add the winnings to the user's coins
  slotModel.addCoins(winnings);

  return res.json({
    spinResult: spinResult,
    winnings: winnings,
    remainingCoins: slotModel.getCoins(),
  });
};
