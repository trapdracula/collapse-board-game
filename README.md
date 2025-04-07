# 💥 Collapse

**Collapse** is a fast-paced, dice-based strategy game simulating economic ruin in a battle between the **Community** and the **Bank**. Players must navigate income distribution, role dynamics, and a volatile equity pile to outwit and outlast the opposing side.

---

## 🎯 Objective

- **Community Victory**: The combined score of all Community players reaches **100 points**.
- **Bank Victory**: The Bank alone accumulates **50 points**.

---

## 👥 Players

- **3 to 6 players** total.
- One player is randomly chosen as **The Bank**.
- All other players are part of **The Community**.

---

## 🎲 Game Setup

1. Start with each player at **0 points**.
2. Randomly assign the **Bank** role to one player.
3. Determine turn order by going left of the Bank **or** default to **whoever last bought everyone pizza** (Community’s choice).
4. Begin gameplay with the chosen first player.

---

## 🧠 Game Concepts

### ✅ The Roles

#### 🏦 The Bank
- Collects points **only** when they roll a sum **not divisible** evenly by the number of Community players.
- May **Ransack** the Equity Pile under specific conditions (see below).

#### 🧑‍🤝‍🧑 The Community
- Points from dice rolls are **evenly split** among all Community members.
- Leftover points are stored in the **Equity Pile**.
- May Ransack the Equity Pile under specific conditions (see below).

---

## 🔁 Turn Flow

1. **Roll**: The current player rolls **2 six-sided dice (2d6)**.
2. **Resolve Points**:
   - **Community Player**:
     - Distribute roll total evenly among Community players.
     - Remainder (if any) goes to the **Equity Pile**.
   - **Bank**:
     - If roll total **cannot** be evenly split among Community players, the Bank keeps the full amount.
     - If the Bank **meets Ransack criteria**, it may Ransack the Equity Pile instead of rolling.
3. **Check Roles**:
   - If any Community player’s score exceeds the Bank’s, that player becomes the new **Bank**.
4. **Check Win Conditions**:
   - Bank has ≥ 50 points → 🏦 **Bank Wins**!
   - Community total is ≥ 100 points → 🤝 **Community Wins**!

---

## 🏚️ Ransack Rules (Equity Pile)

Players may **choose to Ransack instead of rolling** on their turn.

### 🔹 Community Ransack:
- May **only Ransack** the Equity Pile if the EP **can be evenly split** among all Community members.
- The **decision to Ransack must be made on the first Community player's turn** of the round.
- If the Community chooses to Ransack:
  - All Community players **forgo their turns** for that round — no one rolls.
  - The Equity Pile is split **evenly** among all Community members.
  - **Turn order immediately restarts with the Bank**.

### 🔹 Bank Ransack:
- May **only Ransack** the Equity Pile if:
  - The EP **cannot** be evenly divided among Community players  
  **_OR_**
  - The Bank **rolled doubles** (e.g., 2 and 2) on its previous turn.
- When the Bank Ransacks:
  - It **does not roll** during that turn.
  - The Bank must **split the EP 60/40**, favoring the Community:
    - **60%** goes to a **Community member of the Bank’s choosing**
    - **40%** goes to the Bank

---

## 📦 Files

| File                | Description                              |
|---------------------|------------------------------------------|
| `index.html`        | Main HTML page to run the game           |
| `style.css`         | Styling for layout and visuals           |
| `game.js`           | Game logic, dice rolling, and state mgmt |
| `dice1.png` - `dice6.png` | Dice face images                  |

---

## 🧩 Example Gameplay

1. **Player 2 (Community)** rolls a **5** and **3** = 8  
   → 8 ÷ 3 players = 2 each, 2 to **Equity Pile**  
2. **Player 1 (Bank)** rolls **6 and 6** = 12  
   → 12 ÷ 3 = evenly divisible → gets **nothing**  
   → But Bank rolled doubles, so it can **Ransack** instead  
3. Bank chooses Player 3 to receive **60%**, keeps **40%**  
4. **Player 3 (Community)** has more points than Bank → becomes new **Bank**

---

## 🧠 Strategy Notes

- As the Bank, roll smart and **watch the EP** — use it tactically to stall or surge ahead.
- As Community, coordinate and **capitalize on Ransacks** to weaken the Bank.
- **Ransacking** is a risk–reward move — time it wisely!
- A well-timed **Community Ransack** can swing the balance — but it must be coordinated, and the cost is a skipped round of potential points.
- The **Bank** can exploit the Equity Pile under tighter conditions, but with targeted gain.

---

## 💡 Credits

Game design by **Matthew Lancaster**  
Built with HTML, CSS, and JavaScript 🎲  
