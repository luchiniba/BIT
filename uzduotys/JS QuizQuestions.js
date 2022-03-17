var theQuestions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    answer: {
        a: "<javascript>",
        b: "<script>",
        c: "<js>",
        d: "<scripting>"
    },
    correctAnswer: "b"
}, {
    question: "The external JavaScript file must contain the <script> tag.",
    answer: {
        a: "False",
        b: "True"
    },
    correctAnswer: "a"
}, {
    question: "How do you create a function in JavaScript?",
    answer: {
        a: "function myFunction()",
        b: "function = myFunction()",
        c: "function:myFunction()"
    },
    correctAnswer: "a"
}, {
    question: "How do you call a function named 'myFunction'?",
    answer: {
        a: "call function myFunction()",
        b: "myFunction()",
        c: "call myFunction()"
    },
    correctAnswer: "b"
}, {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p> ",
    answer: {
        a: "#demo.innerHTML = 'Hello World!';",
        b: "document.getElementByName('p').innerHTML = 'Hello World!';",
        c: "document.getElementById('demo').innerHTML = 'Hello World!';",
        d: "document.getElement('p').innerHTML = 'Hello World!';"
    },
    correctAnswer: "c"
}, {
    question: "Where is the correct place to insert a JavaScript?",
    answer: {
        a: "Both the <head> section and the <body> section are correct",
        b: "The <body> section",
        c: "The <head> section",
    },
    correctAnswer: "a"
}, {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answer: {
        a: "<script href='xxx.js'>",
        b: "<script name='xxx.js'>",
        c: "<script src='xxx.js'>"
    },
    correctAnswer: "c"
}, {
    question: "How to write an IF statement in JavaScript?",
    answer: {
        a: "if i = 5",
        b: "if i = 5 then",
        c: "if i == 5 then",
        d: "if (i == 5)"
    },
    correctAnswer: "d"
}, {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answer: {
        a: "if i =! 5 then",
        b: "if (i <> 5)",
        c: "if (i != 5)",
        d: "if i <> 5"
    },
    correctAnswer: "c"
}, {
    question: "How does a WHILE loop start?",
    answer: {
        a: "while (i <= 10; i++)",
        b: "while i = 1 to 10",
        c: "while (i <= 10)",
    },
    correctAnswer: "c"
}, {
    question: "How does a FOR loop start?",
    answer: {
        a: "for (i <= 5; i++)",
        b: "for (i = 0; i <= 5)",
        c: "for (i = 0; i <= 5; i++)",
        d: "for i = 1 to 5"
    },
    correctAnswer: "c"
}, {
    question: "How can you add a comment in a JavaScript?",
    answer: {
        a: "'This is a comment",
        b: "<!--This is a comment-->",
        c: "//This is a comment",
    },
    correctAnswer: "c"
}, {
    question: "How to insert a comment that has more than one line?",
    answer: {
        a: "/*This comment has more than one line*/",
        b: "//This comment has more than one line//",
        c: "<!--This comment has more than one line-->",
    },
    correctAnswer: "a"
}, {
    question: "What is the correct way to write a JavaScript array?",
    answer: {
        a: "var colors = 'red', 'green', 'blue'",
        b: "var colors = ['red', 'green', 'blue']",
        c: "var colors = (1:'red', 2:'green', 3:'blue')",
        d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    },
    correctAnswer: "b"
}, {
    question: "How do you round the number 7.25, to the nearest integer?",
    answer: {
        a: "Math.round(7.25)",
        b: "round(7.25)",
        c: "Math.rnd(7.25)",
        d: "rnd(7.25)"
    },
    correctAnswer: "a"
}, {
    question: "How do you find the number with the highest value of x and y?",
    answer: {
        a: "top(x, y)",
        b: "Math.ceil(x, y)",
        c: "Math.max(x, y)",
        d: "ceil(x, y)"
    },
    correctAnswer: "c"
}, {
    question: "JavaScript is the same as Java.",
    answer: {
        a: "False",
        b: "True",
    },
    correctAnswer: "a"
}, {
    question: "How can you detect the client's browser name?",
    answer: {
        a: "browser.name",
        b: "navigator.appName",
        c: "client.navName",
    },
    correctAnswer: "b"
}, {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: {
        a: "onmouseclick",
        b: "onchange",
        c: "onclick",
        d: "onmouseover"
    },
    correctAnswer: "c"
}, {
    question: "How do you declare a JavaScript variable?",
    answer: {
        a: "var carName;",
        b: "variable carName;",
        c: "v carName;",
    },
    correctAnswer: "a"
}, {
    question: "Which operator is used to assign a value to a variable?",
    answer: {
        a: "-",
        b: "=",
        c: "x",
        d: "*"
    },
    correctAnswer: "b"
}, {
    question: "What will the following code return: Boolean(10 > 9)",
    answer: {
        a: "NaN",
        b: "false",
        c: "true",
    },
    correctAnswer: "c"
}, {
    question: "Is JavaScript case-sensitive?",
    answer: {
        a: "Yes",
        b: "No",
    },
    correctAnswer: "a"
}, ]