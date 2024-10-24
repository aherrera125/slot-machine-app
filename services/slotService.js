const reels = require('../config/reel-config');

class SlotService {
  // Randomly spin the reels
  spinReels() {
    const reel1Result =
      reels.reel1[Math.floor(Math.random() * reels.reel1.length)];
    const reel2Result =
      reels.reel2[Math.floor(Math.random() * reels.reel2.length)];
    const reel3Result =
      reels.reel3[Math.floor(Math.random() * reels.reel3.length)];

    return [reel1Result, reel2Result, reel3Result];
  }

  // Calculate the reward based on the spin results
  calculateWinnings(spinResult) {
    const [r1, r2, r3] = spinResult;
    let reward = 0;

    // Check for rewards
    if (r1 === 'cherry' && r2 === 'cherry' && r3 === 'cherry') {
      reward = 50;
    } else if (r1 === 'cherry' && r2 === 'cherry') {
      reward = 40;
    } else if (r1 === 'apple' && r2 === 'apple' && r3 === 'apple') {
      reward = 20;
    } else if (r1 === 'apple' && r2 === 'apple') {
      reward = 10;
    } else if (r1 === 'banana' && r2 === 'banana' && r3 === 'banana') {
      reward = 15;
    } else if (r1 === 'banana' && r2 === 'banana') {
      reward = 5;
    } else if (r1 === 'lemon' && r2 === 'lemon' && r3 === 'lemon') {
      reward = 3;
    }

    return reward;
  }
}

module.exports = SlotService;
