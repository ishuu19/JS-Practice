const express = require("express");
const app = express();
const port = 5001;

// Add middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.send(`
        <style>
            body {
                margin: 0;
                padding: 0;
                background: #f4f4f4;
                font-family: 'Segoe UI', Arial, sans-serif;
            }
            h1 {
                font-size: 2rem;
                text-align: center;
                color: #333;
                margin-bottom: 24px;
            }
            .calc {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                border-radius: 16px;
                padding: 40px 32px;
                min-width: 320px;
                min-height: 240px;
            }
            .func {
                display: flex;
                gap: 24px;
                margin-top: 16px;
            }
            .func button {
                border: none;
                border-radius: 8px;
                background: #0078d4;
                color: #fff;
                font-size: 1.1rem;
                padding: 12px 32px;
                cursor: pointer;
                transition: background 0.2s;
                box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            }
            .func button:hover {
                background: #005fa3;
            }
        </style>
        <div class="calc">
            <h1>Calculator</h1>
            <div class="func">
                <button class="add" onclick="window.location.href='/add'">Add</button>
                <button class="subtract" onclick="window.location.href='/subtract'">Subtract</button>
            </div>
        </div>
    `)
})

// Common styles for all calculator pages
const calculatorStyles = `
    <style>
        .calculator-container {
            text-align: center;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .calc-form {
            margin: 20px auto;
            max-width: 300px;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
        .back-link {
            display: inline-block;
            margin-top: 20px;
            color: #4CAF50;
            text-decoration: none;
        }
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
`;

app.get("/add", (req, res)=>{
    res.send(`
        ${calculatorStyles}
        <div class="calculator-container">
            <h1>Add Numbers</h1>
            <form action="/add" method="post" class="calc-form">
                <input type="number" name="num1" placeholder="Number 1" required>
                <input type="number" name="num2" placeholder="Number 2" required>
                <button type="submit">Add</button>
            </form>
            <a href="/" class="back-link">Back to Calculator</a>
        </div>
    `);
})

app.post("/add", (req, res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2;

    res.send(`
        ${calculatorStyles}
        <div class="calculator-container">
            <h1>Result</h1>
            <p>${num1} + ${num2} = ${result}</p>
            <a href="/add" class="back-link">Calculate Again</a>
            <br>
            <a href="/" class="back-link">Back to Calculator</a>
        </div>
    `);


})


app.listen(port, ()=>{
    console.log("Server running at port " + port);
})