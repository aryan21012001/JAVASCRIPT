// JavaScript source code
 Create an array consisting of fruits names and when we click on a button sort it in descending order.
    <html>
        <body>
            <h2>JavaScript Array Sort Reverse</h2>
            <p>The reverse() method reverses the elements in an array.</p>
            <p>
                By combining sort() and reverse() you can sort an array in descending
                order:
            </p>
            <p id="demo1"></p>
            <p id="demo2"></p>
            <script>
                const fruits = [
                "Banana",
                "Orange",
                "Apple",
                "Mango",
                "Watermelon",
                "Grapes",
                "Papaya",
                ];
                document.getElementById("demo1").innerHTML = fruits;
                fruits.sort();
                fruits.reverse();
                document.getElementById("demo2").innerHTML = fruits;
            </script>
        </body>
    </html>



Write a program with FOR / IN loop.
    <html>
        <body>
            <h2>Q3 For/In Loop</h2>
            <p>The for in statement loops through the properties of an object:</p>
            <p id="demo"></p>
            <script>
                const person = {fname: "Rahul", lname: "Koppula", age: 21 };
                let txt = "";
                for (let x in person) {
                    txt += person[x] + " ";
                document.getElementById("demo").innerHTML = txt;
            </script>
        </body>
    </html >



Create an object "person" with properties firstname and lastname.Display these properties using 2 different ways of accessing.
const person = {
    firstName: "rahul",
    lastName: "koppula",
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person["firstName"]);
console.log(person["lastName"]);



Write a program with variable hoisting(initialization first then declaration).
< html >
    <body>
        <h2>Q5 Hoisting</h2>
        <p id="demo"></p>
        <script>
            var x = 8;
            var y; 
            elem = document.getElementById("demo");
            elem.innerHTML = x + " " + y; // this is to display both x and y
            y = 3; 
        </script>
    </body>
</html >



Use strict mode in your program and understand why variable not declared causes error.
< html >
    <body>
        <p>
            Q6 Demonstarting that use strict will throw an error when variable is not
            declared
        </p>
        <script>
            x = 3; 
            myFunction();
            function myFunction() {
                "use strict";
            y = 4; 
      }
        </script>
    </body>
</html >
