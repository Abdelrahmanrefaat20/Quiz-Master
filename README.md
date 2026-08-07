# 🧠 QuizMaster

**The ultimate trivia challenge.** A sleek, keyboard-friendly quiz game built with vanilla HTML, CSS, and JavaScript, powered by the [Open Trivia Database](https://opentdb.com/) API.

> 🎓 **Practice project:** This app was built as a hands-on exercise in **Object-Oriented Programming (OOP) with JavaScript** — using classes, encapsulation, and modular design to manage game state, questions, and scoring.

## Features

- 🎮 **Custom quiz setup** — enter your name, pick a category, difficulty, and number of questions (1–50)
- 🔀 **Categories** — General Knowledge, Computers, Sports, History, Science, or Random
- 🎯 **Difficulty levels** — Easy, Medium, Hard
- ⏱️ **Timed questions** with a visual countdown and warning state when time is running low
- ⌨️ **Keyboard shortcuts** — press `1`–`4` to select an answer
- 📊 **Live progress bar** tracking question count and score
- ✅ **Answer feedback** — correct/wrong states with the correct answer revealed
- 🏆 **Results screen** with score, accuracy percentage, and a leaderboard
- 🚨 **Error handling** for failed API requests and form validation

## Demo Preview

The app walks through four main states:

1. **Setup screen** – choose player name, category, difficulty, and question count
2. **Question screen** – answer questions against the clock
3. **Results screen** – see your score, accuracy, and leaderboard standing
4. **Error screen** – friendly retry prompt if something goes wrong

## Getting Started

### Prerequisites

You just need a modern web browser — no build tools or dependencies required.

### Run locally

1. Clone the repository
   ```bash
   git clone https://github.com/Abdelrahmanrefaat20/Quiz-Master.git
   cd Quiz-Master
   ```
2. Open `index.html` directly in your browser, **or** serve it locally (recommended, since the JS uses ES modules):
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000` (or the port shown) in your browser.

## Project Structure

```
Quiz-Master/
├── CSS/           # Stylesheets
├── images/        # Icons and image assets (favicon, etc.)
├── js/
│   ├── ui-controls.js   # Custom dropdown/select behavior
│   └── index.js         # Core quiz logic (API calls, game state, scoring)
└── index.html     # Main entry point
```

## How It Works

1. On the setup screen, choose your player name, category, difficulty, and number of questions.
2. QuizMaster fetches trivia questions from the [Open Trivia Database API](https://opentdb.com/api_config.php) based on your selections.
3. Answer each question before the timer runs out — use your mouse or keys `1`–`4`.
4. After the last question, view your final score, accuracy percentage, and see how you rank on the leaderboard.

## Built With

- **HTML5** & **CSS3** — structure and styling
- **JavaScript (ES Modules + OOP)** — game logic and state management, structured around classes to practice object-oriented design
- **[Font Awesome](https://fontawesome.com/)** — icons
- **[Open Trivia DB API](https://opentdb.com/)** — trivia questions




