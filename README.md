# AD283v - Develop SAPUI5 Applications with Pro-Code Tools and Best Practices from SAP
On this site you can find an overview about the available exercises, the respective solutions and live demos.

## The Workshop
Just start with the first exercise [Getting Started](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex0/README.md) and then follow the link to the next excercise at the end of each chapter.

## Working With The Code

These are the steps to get the working code for any of the exercises, in case you missed an exercise or could not resolve an error you encountered.

NOTE: steps 1-6 are only required once. After they have been done, you can simply do steps 7 and 8 to open the code of a different exercise.

1. Go to SAP Business Application Studio
2. Open a new Terminal (in the top menu bar, click on *Terminal* and select *New Terminal*)
3. Go to folder `projects` (in the newly opened Terminal area at the bottom, enter `cd /home/user/projects` and hit the `Enter` key)
4. Then, similarly, execute `git clone https://github.com/SAP-samples/teched2023-AD283v.git` in the Terminal
5. Then, execute `cd teched2023-AD283v`
6. Execute `git checkout code`
7. In the top menu bar, click on *File* > *Open Workspace...*
8. Select the `sensormanager` folder inside your desired exercise, e.g. `/projects/teched2023-AD283v/ex5/sensormanager` for exercise 5 and click `Open`

Once BAS has finished opening the workspace, the code implementing the selected exercise is available in the Project Explorer.

To run the code:
1. Open a new Terminal again (*Terminal* > *New Terminal*)
2. In the Terminal, execute `npm install`. This may take a while.
3. Once finished, either:
    - press the "play"-style triangle in the left-hand icon bar to open the Run Configurations and click the green triangle that appears when hovering `Start sensormanager` or:
    - press the "debug" icon in the left-hand icon bar and press the green "Start Debugging" triangle

NOTE: you can execute roughly the same steps in your local development environment when you have VSCode installed. UI5 and this app do not require the usage of the Business Application Studio.


## Working With The Demo
This is an easy job. Just click on the demo link of the desired exercise below.

## Code And Demo

| Exercise | | | |
| :--- | --- | --- | --- |
| Getting Started | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex0/README.md) | | |
| Exercise 1 - Project Setup Using Business Application Studio | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex1/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex1/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex1/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 2 - Basic UI5 Configuration and View Creation | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex2/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex2/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex2/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 3 - Show Sensor Content | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex3/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex3/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex3/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 4 - Introduce Localization | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex4/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex4/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex4/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 5 - Improve Visualization | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex5/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex5/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex5/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 6 - Filtering with the IconTabBar | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex6/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex6/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex6/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 7 - Fragment containing a SelectDialog | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex7/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex7/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex7/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 8 - Second View with Navigation | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex8/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex8/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex8/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 9 - Card with Sensor Details | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex9/README.md) | [solution](https://github.com/SAP-samples/teched2023-AD283v/tree/code/exercises/ex9/) | [demo](https://sap-samples.github.io/teched2023-AD283v/ex9/test/flpSandbox.html?sap-ui-xx-viewCache=false#keepcoolsensormanager-display) |
| Exercise 10 - Deployment to SAP BTP, Cloud Foundry runtime | [exercise](https://github.com/SAP-samples/teched2023-AD283v/tree/main/exercises/ex10/README.md) | | |
