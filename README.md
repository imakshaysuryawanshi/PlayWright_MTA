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
├── chapter_01_js_basics/
│   ├── js_basics.js                  # JavaScript basics examples
│   ├── JS_Keywords.md                # Important JavaScript keywords
│   ├── JS_Identifier_Rules.md        # Rules for naming identifiers
│   └── VSCode_Windows_Shortcuts.md   # Useful VS Code shortcuts
│
├── chapter_02_js_concepts/
│   ├── const_explained.js
│   ├── let_explained.js
│   ├── var_explained.js
│   ├── hoisting_fn.js
│   └── var_let_const_function.js
│
├── chapter_03_literal/
│   ├── Backtick_single_double.js
│   ├── String.js
│   ├── null_undefined.js
│   └── template_literal.js
│
├── chapter_04_operators/
│   ├── assignment_operator.js
│   ├── Confusing_Comparsion.js
│   ├── Operator.js
│   └── ternary_operator.js
│
├── chapter_05_if_else/
│   ├── if_else.js
│   ├── real_if_else.js
│   ├── IQ_ifelse.js
│   ├── Task_Que1.js
│   ├── Task_Que2.js
│   ├── Task_Que3.js
│   ├── Task_Que4.js
│   └── Task_Que5.js
│
├── chapter_06_Switch_Statement/
│   ├── switch.js
│   ├── No_Break.js
│   ├── Default.js
│   ├── Switch_Group.js
│   ├── IQ_switch.js
│   └── REAL_TIME_EXAMPLE.js
│
├── chapter_07_loops/
│   └── 04_continue_in_loop.js        # continue statement examples
│
├── chapter_08_Arrays/
│   ├── Arrays.02.js                  # Array creation methods
│   └── Array_add_Remove_01.js        # Array splice operations
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
| Chapter 01 | JavaScript Basics, Keywords & Identifier Rules | ✅ Complete |
| Chapter 02 | JavaScript Concepts (var, let, const, hoisting) | ✅ Complete |
| Chapter 03 | JavaScript Literals & Template Strings | ✅ Complete |
| Chapter 04 | Operators (Assignment, Comparison, Ternary) | ✅ Complete |
| Chapter 05 | If/Else Conditional Statements | ✅ Complete |
| Chapter 06 | Switch Statements & Best Practices | ✅ Complete |
| Chapter 07 | Loops (for, while, continue, break) | ✅ Complete |
| Chapter 08 | Arrays (creation, manipulation) | ✅ Complete |

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

> 📄 For a complete list, see [`VSCode_Windows_Shortcuts.md`](chapter_01_js_basics/VSCode_Windows_Shortcuts.md)

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

> 📄 Full list with descriptions: [`JS_Keywords.md`](chapter_01_js_basics/JS_Keywords.md)

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

> 📄 Detailed rules and examples: [`JS_Identifier_Rules.md`](chapter_01_js_basics/JS_Identifier_Rules.md)

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