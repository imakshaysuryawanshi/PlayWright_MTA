# Playwright MTA - Practice Repository

A comprehensive learning repository for **Playwright** end-to-end testing framework with **JavaScript/TypeScript** fundamentals. This project is designed to take you from JavaScript basics to advanced Playwright automation testing concepts.

---

## 📚 Table of Contents

- [About](#about)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Chapters Overview](#chapters-overview)
- [Technologies](#technologies)
- [VS Code Shortcuts](#vs-code-shortcuts)
- [Contributing](#contributing)

---

## 🎯 About

This repository contains hands-on practice materials, notes, and code examples for learning:
- JavaScript basics and advanced concepts
- Playwright automation testing framework
- Best practices for writing maintainable test scripts
- Real-world testing scenarios and patterns

---

## 📁 Project Structure

```
Playwright_MTA/
│
├── Chapt_01_Basics/
│   ├── js_basics.js                  # JavaScript basics examples
│   ├── JS_Keywords.md                # Important JavaScript keywords
│   ├── JS_Identifier_Rules.md        # Rules for naming identifiers
│   └── VSCode_Windows_Shortcuts.md   # Useful VS Code shortcuts
│
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/imakshaysuryawanshi/PlayWright_MTA.git
cd PlayWright_MTA
```

2. Install dependencies (when Playwright is added):
```bash
npm install
```

3. Install Playwright browsers (when needed):
```bash
npx playwright install
```

---

## 📖 Chapters Overview

| Chapter | Topic | Status |
|---------|-------|--------|
| Chapt_01_Basics | JavaScript Basics, Keywords & Identifier Rules | ✅ Complete |

---

## 🛠 Technologies

- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language
- [Node.js](https://nodejs.org/) - Runtime environment

---

## ⌨️ VS Code Shortcuts

Quick reference for essential VS Code shortcuts used in this project:

| Shortcut | Action |
|----------|--------|
| `Ctrl + /` | Toggle line comment |
| `Ctrl + Shift + K` | Delete line |
| `Ctrl + D` | Select next occurrence |
| `Ctrl + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |
| `Ctrl + Shift + P` | Command Palette |
| `F5` | Start debugging |
| `Ctrl + `` ` | Toggle terminal |

> 📄 For a complete list, see [`VSCode_Windows_Shortcuts.md`](Chapt_01_Basics/VSCode_Windows_Shortcuts.md)

---

## 📝 JavaScript Quick Reference

### Important Keywords

JavaScript has many reserved keywords for different purposes:

| Category | Keywords |
|----------|----------|
| Variable Declaration | `var`, `let`, `const` |
| Conditional | `if`, `else`, `switch`, `case`, `default` |
| Loops | `for`, `while`, `do`, `break`, `continue` |
| Functions | `function`, `return`, `yield` |
| Object-Oriented | `class`, `extends`, `super`, `this`, `new`, `static`, `get`, `set` |
| Error Handling | `try`, `catch`, `finally`, `throw` |
| Async | `async`, `await` |
| Modules | `import`, `export` |

> 📄 Full list with descriptions: [`JS_Keywords.md`](Chapt_01_Basics/JS_Keywords.md)

### Identifier Naming Rules

- ✅ Must start with a letter, underscore (`_`), or dollar sign (`$`)
- ❌ Cannot start with a digit
- ❌ Cannot use reserved keywords
- ❌ No spaces or special characters (except `_` and `$`)
- ✅ Case-sensitive: `myVar` ≠ `MyVar` ≠ `MYVAR`

**Conventions:**
- `camelCase` → variables, functions (`userName`, `calculateTotal()`)
- `PascalCase` → classes (`Person`, `UserProfile`)
- `UPPER_SNAKE_CASE` → constants (`MAX_SIZE`, `PI`)

> 📄 Detailed rules and examples: [`JS_Identifier_Rules.md`](Chapt_01_Basics/JS_Identifier_Rules.md)

---

## 🤝 Contributing

This is a personal learning repository, but suggestions and improvements are always welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-idea`)
3. Commit your changes (`git commit -m 'Add some amazing idea'`)
4. Push to the branch (`git push origin feature/amazing-idea`)
5. Open a Pull Request

---

## 📧 Contact

- **GitHub:** [@imakshaysuryawanshi](https://github.com/imakshaysuryawanshi)
- **Repository:** [PlayWright_MTA](https://github.com/imakshaysuryawanshi/PlayWright_MTA)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> **Happy Learning! 🎓** Keep practicing and automating!