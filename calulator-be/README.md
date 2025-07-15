# 🧮 Calculator Backend

A simple calculator web application built with Express.js, demonstrating server-side rendering and form handling.

## 🌟 Features

- Server-side rendered calculator interface
- Addition operation support
- Clean and modern UI
- Form validation
- Responsive design
- Express.js routing
- Static file serving

## 🛠️ Tech Stack

```javascript
{
    backend: ['Node.js', 'Express.js'],
    frontend: ['HTML', 'CSS (inline)'],
    server: ['Server-side rendering'],
    styling: ['Modern CSS', 'Flexbox', 'Responsive Design']
}
```

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node calculator.js
   ```
   
   Or with nodemon for development:
   ```bash
   npx nodemon calculator.js
   ```

3. Access the application:
   - Open your browser
   - Navigate to `http://localhost:5001`

## 📁 Project Structure

```
calculator-be/
├── calculator.js     # Main server file with Express setup
├── package.json      # Project dependencies and scripts
└── package-lock.json # Dependency lock file
```

## 🔧 Implementation Details

### Server Setup
- Express.js server running on port 5001
- URL-encoded form data parsing
- Static file serving configuration

### Routes
- `GET /` - Main calculator interface
- `GET /add` - Addition form page
- `POST /add` - Handle addition calculation

### Styling
- Modern, responsive design
- Flexbox layout
- Shadow effects
- Hover interactions
- Clean typography

## 🌱 Learning Outcomes

This project demonstrates:
- Express.js server setup
- Server-side rendering
- Form handling in Express
- Modern CSS practices
- Responsive design principles
- Route handling
- Static file serving

## 🔄 Future Improvements

- Add more operations (subtract, multiply, divide)
- Implement error handling
- Add input validation
- Include unit tests
- Add history of calculations
- Implement a proper frontend framework
- Add dark mode support

## 📝 Dependencies

- Express.js: ^5.1.0
- Nodemon: ^3.0.0 (development) 