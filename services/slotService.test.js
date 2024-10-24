const SlotService = require('./slotService');

describe('SlotService', () => {
  let slotService;

  // Initialize the service before each test
  beforeEach(() => {
    slotService = new SlotService();
  });

  // Test for spinReels function
  test('spinReels should return an array of length 3', () => {
    const result = slotService.spinReels();
    expect(result).toHaveLength(3);
    expect(Array.isArray(result)).toBe(true);
  });

  test('spinReels should return valid symbols from each reel', () => {
    const result = slotService.spinReels();
    const possibleSymbols = ['cherry', 'lemon', 'apple', 'banana']; // all possible symbols
    result.forEach((symbol) => {
      expect(possibleSymbols).toContain(symbol); // Ensure each result is a valid symbol
    });
  });

  // Test for calculateWinnings function
  test('calculateWinnings should return correct rewards for 3 cherries in a row', () => {
    const spinResult = ['cherry', 'cherry', 'cherry'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(50);
  });

  test('calculateWinnings should return correct rewards for 2 cherries in a row', () => {
    const spinResult = ['cherry', 'cherry', 'lemon'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(40);
  });

  test('calculateWinnings should return correct rewards for 3 apples in a row', () => {
    const spinResult = ['apple', 'apple', 'apple'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(20);
  });

  test('calculateWinnings should return correct rewards for 2 apples in a row', () => {
    const spinResult = ['apple', 'apple', 'lemon'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(10);
  });

  test('calculateWinnings should return correct rewards for 3 bananas in a row', () => {
    const spinResult = ['banana', 'banana', 'banana'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(15);
  });

  test('calculateWinnings should return correct rewards for 2 bananas in a row', () => {
    const spinResult = ['banana', 'banana', 'lemon'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(5);
  });

  test('calculateWinnings should return correct rewards for 3 lemons in a row', () => {
    const spinResult = ['lemon', 'lemon', 'lemon'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(3);
  });

  test('calculateWinnings should return 0 when there are no matching symbols', () => {
    const spinResult = ['apple', 'banana', 'lemon'];
    const reward = slotService.calculateWinnings(spinResult);
    expect(reward).toBe(0);
  });
});
