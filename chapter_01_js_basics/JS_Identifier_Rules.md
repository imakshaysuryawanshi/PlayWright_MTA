# JavaScript Identifier Rules

## What is an Identifier?
An **identifier** is a name given to a variable, function, class, or any other user-defined item in JavaScript.

---

## Important Rules for Identifiers

### 1. Allowed Characters
- **Letters**: `a-z`, `A-Z`
- **Digits**: `0-9`
- **Underscore**: `_`
- **Dollar Sign**: `$`

### 2. Must Not Start with a Digit
- ❌ `1name` — Invalid
- ✅ `name1` — Valid

### 3. Case-Sensitive
- `myVar`, `MyVar`, and `MYVAR` are all **different** identifiers.

### 4. No Spaces or Special Characters
- ❌ `my var` — Invalid (contains space)
- ❌ `my-var` — Invalid (contains hyphen)
- ❌ `my@var` — Invalid (contains special character)
- ✅ `my_var` — Valid
- ✅ `myVar` — Valid
- ✅ `$var` — Valid

### 5. Cannot Use Reserved Keywords
- ❌ `let class = 10;` — Invalid (`class` is a reserved keyword)
- ❌ `let return = 5;` — Invalid (`return` is a reserved keyword)
- Refer to `JS_Keywords.md` for the full list of reserved keywords.

### 6. Unicode Characters Are Allowed (But Not Recommended)
- ✅ `let \u03C0 = 3.14;` — Valid (Unicode for π)
- ⚠️ Best practice: Stick to ASCII characters for readability and portability.

### 7. No Length Limit
- JavaScript does not enforce a maximum length for identifiers.
- ⚠️ Keep names concise and meaningful for better code readability.

### 8. Descriptive and Meaningful Names
- ❌ `let x = 25;` — Unclear purpose
- ✅ `let userAge = 25;` — Clear and descriptive

---

## Naming Conventions

| Convention | Use Case | Example |
|---|---|---|
| `camelCase` | Variables, functions | `userName`, `calculateTotal()` |
| `PascalCase` | Classes, constructors | `Person`, `UserProfile` |
| `UPPER_SNAKE_CASE` | Constants | `MAX_SIZE`, `PI` |
| `snake_case` | Sometimes used in constants | `max_size`, `api_key` |

> **Best Practice:** Follow consistent naming conventions across your codebase.

---

## Examples of Valid and Invalid Identifiers

| Identifier | Valid? | Reason |
|---|---|---|
| `name` | ✅ Yes | Starts with a letter |
| `_name` | ✅ Yes | Starts with underscore |
| `$name` | ✅ Yes | Starts with dollar sign |
| `name1` | ✅ Yes | Letters and digits |
| `first_name` | ✅ Yes | Letters and underscore |
| `1name` | ❌ No | Starts with a digit |
| `my-name` | ❌ No | Contains hyphen |
| `my name` | ❌ No | Contains space |
| `my@name` | ❌ No | Contains special character |
| `class` | ❌ No | Reserved keyword |
| `let` | ❌ No | Reserved keyword |
| `true` | ❌ No | Reserved keyword |

---

## Quick Summary

1. Start with a letter, underscore, or dollar sign.
2. Never start with a digit.
3. Avoid reserved keywords.
4. Do not use spaces or special characters.
5. Use camelCase for variables and functions.
6. Use PascalCase for classes.
7. Use UPPER_SNAKE_CASE for constants.
8. Keep names meaningful and descriptive.

