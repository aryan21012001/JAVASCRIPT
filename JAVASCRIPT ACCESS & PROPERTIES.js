// JavaScript source code
Write program using this keyword when we click on button, it should be disappear.
< html >
    <body>
        <h1>Q1 Using 'this' keyword and also making text disappear</h1>
        <p id="demo"></p>
        <button onclick="fun()" id="btn">Click me!</button>
        <script>
            function fun() {
                document.getElementById("demo").style.display = "none";
      }
            const person = {
                firstName: "RAHUL",
            lastName: "KOPPULA",
            id: 5566,
            fullName: function () {
          return this.firstName + " " + this.lastName;
        },
      };
            document.getElementById("demo").innerHTML = person.fullName();
        </script>
    </body>
</html >



Invoke a function using call() and apply().Also Spot the difference between them.
< html >
    <body>
        <h2>Q2 call() and apply()</h2>
        <p id="demo"></p>

        <script>
            const person = {
                fullName: function (city, country) {
          return (
            this.firstName + " " + this.lastName + ", " + city + ", " + country
            );
        },
      };
            const person1 = {
                firstName: "Rahul",
            lastName: "K",
      };
            person1,
            ["Hyd", "India"]
            );
            document.getElementById("demo").innerHTML = person.fullName.call(
            person1,
            "Hyd",
            "India"
            );
        </script>
    </body>
</html >




Write a program for COUNTER.Whenever we click on a "Count" button, value should increment.
< html >
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>COUNTER</title>
  </head>
  <body>
    <h4>Q3 Qounter button</h4>
    <button id="btn">Click Here!</button>
    <p>Button Clicked <span id="display">0</span> Times</p>
    <script type="text/javascript">
      var count = 0;
      var btn = document.getElementById("btn");
      var disp = document.getElementById("display");
      btn.onclick = function () {
        count++;
        disp.innerHTML = count;
      };
    </script>
  </body>
</html >



    Create a Counter with the help of getter and setter accessors.
< html >
        <body>
            <h2 > Q4 Getter and Setter Counter</h2 >
    <p id="demo"></p>
    <script>
      // Define an object
      const obj = { counter: 0 };
      Object.defineProperty(obj, "reset", {
        get: function () {
          this.counter = 0;
        },
      });
      Object.defineProperty(obj, "increment", {
        get: function () {
          this.counter++;
        },
      });
      Object.defineProperty(obj, "decrement", {
        get: function () {
          this.counter--;
        },
      });
      Object.defineProperty(obj, "add", {
        set: function (value) {
          this.counter += value;
        },
      });
      Object.defineProperty(obj, "subtract", {
        set: function (value) {
          this.counter -= value;
        },
      });
      obj.reset;
      obj.add = 70;
      obj.subtract = 20;
      obj.increment;
      obj.decrement;
      document.getElementById("demo").innerHTML = obj.counter;
    </script>
  </body >
</html >




Add some more properties to an existing function using object prototypes.
< html >
    <body>
        <h2>Q5 Addign properties with object prototype</h2>

        <p id="demo"></p>

        <script>
            function Person(first, last, age, eye) {
                this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
      }

            Person.prototype.nationality = "Indian";

            const me = new Person("Rahul", "K", 21, "black");
            document.getElementById("demo").innerHTML =
            "My nationality is " + me.nationality;
        </script>
    </body>
</html >
