# Million_more_campaign_webdriverio_project
This project relates to test automation using webdriverio with mocha framework and chai

## Main Features
- Mocha
- Docker
- Page Object Model
- Allure reporting
- WDIO 7.5
- VSCode Integration
- Multiple Configurations (Devtools, Chromedriver)

## Requirements
- Node version 8 or higher
- (for local execution) Latest Chrome Stable

## Application Under Test
Million-more campaign homepage: https://www.volvocars.com/intl/v/car-safety/a-million-more

## Quick Start
### Local
- clone the git repo: `git clone https://github.com/kalakunta/million_more_campaign_webdriverio.git`
- install the dependencies: `npm install`

### Docker
- clone the git repo: `git clone https://github.com/kalakunta/million_more_campaign_webdriverio.git`
- Build the docker file by running "docker build -t webdriverio ."

## Run the Tests
You can either run the tests with the integrated Visual Studio Code Debug Scripts, or you can run them with one of the following terminal commands or using docker by running the docker build command mentioned in the above step. 

The test scenarios are classified into three sections each one having their own Page Objects models.
  1. To test the text headings and sub-headings across the application page
  2. To test the images present across the application page using the wdio-image-comparison-service
  3. To test the video links present across the application page

## Tests
- Test can be run using "npm run test" which will trigger the amillionmore.img.js test case present within the test/spec folder of the project.
- Modifications can be done from wdio.conf.js file
 
## Suites
- Suite can be run using "npm run --suite suite" command from cmd or VS Code terminal. While running from docker the suite will be a default trigger.
- Suite is configured to be executed in parallel and will trigger two test cases (amillionmore.txt.js, amillionmore.vdo.js)
- Modifications can be done from wdio.conf.js file

## Known Limitations and Issues
- The test coverage is not 100% due to the time limitation
- To manually generate report using the allure report, please configure the allure bin folder in the system requirements path. Allure-cli can be downloaded from (https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/). Although as a part of onComplete the report generation using allure is already configured.
