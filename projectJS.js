var form = document.getElementById("form");
var clearButton = document.getElementById("clearButton");
var createButton = document.getElementById("createButton");

clearButton.addEventListener("click", clearPlanner);
createButton.addEventListener("click", createMealPlan);

function clearPlanner() {
  form.reset();
}

function createMealPlan() {
  var email = document.getElementById("email").value;
  var validEmail = /^\S+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/

  // Validate email against regex pattern
  if (!validEmail.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  var name = document.getElementById("name").value;
  var goal = document.getElementById("goal").value;

  // Construct the HTML content for the meal plan, including personal details, 
  // a stylized table and a button to Print or Download webpage as PDF
  var htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Weekly Meal Plan</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        table, th, td {
          border: 1px solid;
          padding: 8px;
          text-align: center;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <h2>Weekly Meal Plan</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Goal for the week:</strong> ${goal}</p>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            <td>${document.getElementById("mondayBreakfast").value}</td>
            <td>${document.getElementById("tuesdayBreakfast").value}</td>
            <td>${document.getElementById("wednesdayBreakfast").value}</td>
            <td>${document.getElementById("thursdayBreakfast").value}</td>
            <td>${document.getElementById("fridayBreakfast").value}</td>
            <td>${document.getElementById("saturdayBreakfast").value}</td>
            <td>${document.getElementById("sundayBreakfast").value}</td>
          </tr>
          <tr>
            <td>Snack</td>
            <td>${document.getElementById("mondaySnack").value}</td>
            <td>${document.getElementById("tuesdaySnack").value}</td>
            <td>${document.getElementById("wednesdaySnack").value}</td>
            <td>${document.getElementById("thursdaySnack").value}</td>
            <td>${document.getElementById("fridaySnack").value}</td>
            <td>${document.getElementById("saturdaySnack").value}</td>
            <td>${document.getElementById("sundaySnack").value}</td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>${document.getElementById("mondayLunch").value}</td>
            <td>${document.getElementById("tuesdayLunch").value}</td>
            <td>${document.getElementById("wednesdayLunch").value}</td>
            <td>${document.getElementById("thursdayLunch").value}</td>
            <td>${document.getElementById("fridayLunch").value}</td>
            <td>${document.getElementById("saturdayLunch").value}</td>
            <td>${document.getElementById("sundayLunch").value}</td>
          </tr>
          <tr>
            <td>Snack</td>
            <td>${document.getElementById("mondayPmSnack").value}</td>
            <td>${document.getElementById("tuesdayPmSnack").value}</td>
            <td>${document.getElementById("wednesdayPmSnack").value}</td>
            <td>${document.getElementById("thursdayPmSnack").value}</td>
            <td>${document.getElementById("fridayPmSnack").value}</td>
            <td>${document.getElementById("saturdayPmSnack").value}</td>
            <td>${document.getElementById("sundayPmSnack").value}</td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>${document.getElementById("mondayDinner").value}</td>
            <td>${document.getElementById("tuesdayDinner").value}</td>
            <td>${document.getElementById("wednesdayDinner").value}</td>
            <td>${document.getElementById("thursdayDinner").value}</td>
            <td>${document.getElementById("fridayDinner").value}</td>
            <td>${document.getElementById("saturdayDinner").value}</td>
            <td>${document.getElementById("sundayDinner").value}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick="window.print()">Print / Download Meal Prep Plan</button>
      </div>
    </body>
    </html>
  `;

  // Generate a new window/tab for viewing meal plan based on user input
  var newWindow = window.open();

  // Write the HTML content to the new window/tab
  newWindow.document.write(htmlContent);
  newWindow.document.close();
}

