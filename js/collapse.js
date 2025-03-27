// Basic setup for the board game
const game = {
    players: [], // Array to store player objects
    bank: null, // The current bank player
    equityPile: 0, // The shared equity pile
    turnIndex: 0, // Keeps track of whose turn it is
};

// Function to roll two six-sided dice
function rollDice() {
    // Generates two random numbers between 1 and 6 (inclusive)
    return [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
}

// Function to initialize players and set up the game
function initializeGame(playerCount) {
    game.players = Array.from({ length: playerCount }, (_, i) => ({
        id: i + 1, // Assigns an ID starting from 1
        role: i === 0 ? 'Bank' : 'Community', // The first player is the Bank, others are Community
        points: 0, // Initial score set to zero
    }));
    game.bank = game.players[0]; // The first player is the starting Bank
    game.equityPile = 0; // Reset the equity pile
}

// Function to handle a player's turn
function takeTurn(player) {
    const [die1, die2] = rollDice(); // Rolls two dice
    const rollSum = die1 + die2; // Calculates the total roll value
    console.log(`${player.role} Player ${player.id} rolled ${die1} and ${die2} (Total: ${rollSum})`);
    
    if (player.role === 'Community') {
        distributePoints(rollSum); // Community players split points
    } else {
        handleBankTurn(rollSum, die1, die2); // Special rules apply to the Bank
    }

    checkWinCondition(); // Check if the game is over
    game.turnIndex = (game.turnIndex + 1) % game.players.length; // Move to the next turn
}

// Function to distribute points among community players
function distributePoints(points) {
    const communityPlayers = game.players.filter(p => p.role === 'Community'); // Get all community players
    const share = Math.floor(points / communityPlayers.length); // Each player gets an equal share
    const remainder = points % communityPlayers.length; // Leftover points go to the equity pile
    
    communityPlayers.forEach(player => player.points += share); // Distribute points
    game.equityPile += remainder; // Add remainder to the equity pile
}

// Function to handle the bank's turn
function handleBankTurn(points, die1, die2) {
    const communityPlayers = game.players.filter(p => p.role === 'Community').length;
    
    // The bank only collects points if they cannot be evenly split among community players
    if (points % communityPlayers !== 0) {
        game.bank.points += points;
    }
    
    // If the bank rolls doubles and the equity pile isn't evenly divisible, they can ransack it
    if (die1 === die2 && game.equityPile % communityPlayers !== 0) {
        console.log(`Bank ransacks the equity pile!`);
        game.bank.points += game.equityPile;
        game.equityPile = 0; // Clear the equity pile
    }
}

// Function to check if a player should become the new bank
function checkBankStatus() {
    // Look for a community player who has more points than the bank
    const potentialBank = game.players.find(p => p.role === 'Community' && p.points > game.bank.points);
    
    if (potentialBank) {
        // Swap roles: the new player becomes the Bank, and the old bank joins the Community
        game.bank.role = 'Community';
        potentialBank.role = 'Bank';
        game.bank = potentialBank;
        console.log(`Player ${potentialBank.id} is now the Bank!`);
    }
}

// Function to check win conditions
function checkWinCondition() {
    // Calculate total community points
    const communityTotal = game.players.filter(p => p.role === 'Community').reduce((sum, p) => sum + p.points, 0);
    
    if (game.bank.points >= 50) {
        console.log(`The Bank wins!`);
    } else if (communityTotal >= 100) {
        console.log(`The Community wins!`);
    }
}
