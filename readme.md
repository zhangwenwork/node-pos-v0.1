# Node Js Get Started

## Business Requirement

A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called ```printReceipt```, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

Input format (example):

```javascript

[
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00

    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000004',
        Name: 'battery',
        Unit: 'a',
        Price: 2.00
    }
]

```

List contents (example):

```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)
Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)
Name: Battery, Quantity: 1 a, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)
----------------------
Total: 23.00 (yuan)
**********************
```

## Practice Challenge
- How to export and import a module in node
- What is npm and package.json
- Why Javascript cannot run the in browser
- Convert the basic description into a program as code
- The use of loop nesting
- Readable function and variable naming


## Practice Requirement

- Make all test pass by npm test

#### Environment
- Node Js
- NPM

#### Begin

Fork below repo to your own repo site in Github
```
https://github.com/tws-graduate-bootcamp/node-pos-v0.1
```

Open your terminal, change to any path and clone this repository:
```
git clone `forked repo site`
```
Install dependencies:
```
npm install
```
Run all tests:
```
npm test
```
Run a specific test file:
```
node_modules/jasmine/bin/jasmine.js spec/main-spec.js
```
You can find these two key folders when you open the repository with your favorite code editor:
```
spec  //Test code, stands for specifications
src   //Source code you should implementation
```

## Practice Output && Submit
- You should implement the code to pass all tests in spec folder, and push your repo to GitHub repo named **node-pos-v0.1**.
- Commit your repository link to complete this Question.

## Learning Resource
* [Tutorials: The Modern Javascript Tutorial includes code execution online](http://javascript.info/)
* [Docs: MDN Docs for Javascript](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Tutorials: Modern JS Cheat Sheet](https://mbeaudru.github.io/modern-js-cheatsheet/)
* [JavaScript Code Camp](https://www.freecodecamp.org/challenges/comment-your-javascript-code)
* [ECMAScript 6 Features](http://es6.ruanyifeng.com/)
* [Install Node](https://github.com/creationix/nvm)
* [Install NPM](https://github.com/npm/npm)
* [Jasmine Tutorial](http://jasmine.github.io/2.4/introduction.html)
