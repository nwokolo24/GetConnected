# GetConnected
Find people who are looking for you...


BACK-END
Because we used Visual Studio Code (VS Code), there are a list of extensions you will need to have:
-- Angular Language Service
-- Angular Snippets
-- C#
-- C# Extensions
-- HTML Boilerplate
-- HTML Snippets
-- Material Icon Theme
-- Nuget Gallery
-- Prettier - Code Formatter
-- SQLite
-- Bracket Pair Colorizer

FRONT-END
The package.json file has a list of all dependencies required for full functionalities of your front end angular application.
-- Running "npm install" while in the client folder will install all those packages.

CLI command used for creating components.
Use "ng g -h" to see options

Note: you will need to change directory into this location "/client/src/app" before running the command:
'ng g c "name of component" --skip-tests'
I used "--skip-tests" because this project was not built using a test driven approach but that should be the best approach.

CLI command used for creating angular services
'ng g s "name of service" --skip-tests'




USING NUGET GALLERY IN VS CODE
The API.csproj file has a comprehensive list of all the packages used to achieve important functionalities in the back-end


MAJOR REFACTORING FOR CONSTELLATION:
-- appsettings.Development.json
    - DefaultConnection database name
    - TokenKey