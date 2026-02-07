# Assignment One – Echo API

## Purpose
The purpose of this assignment is to set up GitHub and Heroku (or Render) instances for future assignments.

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include at least one assert for each request in the validation.

## Requirements
- Sign-up for a free GitHub account: https://github.com/
- Create an Echo server (from lecture)
- Set up Heroku (or Render) to autodeploy your application
- Create a Postman request that posts a body value to your API
  - Create an environment variable `$echo_body` for the body of the request
  - Asserts (tests) must include:
    - Validating string sent is what is returned (use `$echo_body`)
    - Response status code (200)
    - Response time under 500ms

## Deployed API
**POST Endpoint**

## Postman Tests
The Postman collection includes automated tests that verify:
- Status code is 200
- Response body matches the `$echo_body` environment variable
- Response time is under 500ms

## Run in Postman
Click the button below to run the Postman collection with the environment included:

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/52007893-06a36444-ac9a-439d-a7b5-be78c49d5b6a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D52007893-06a36444-ac9a-439d-a7b5-be78c49d5b6a%26entityType%3Dcollection%26workspaceId%3De0becdfd-a376-4b15-b712-e43c8f8ce6f3#?env%5BEcho%20Env%5D=W3sia2V5IjoiZWNob19ib2R5IiwidmFsdWUiOiJoZWxsbyIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaGVsbG8iLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6ImhlbGxvIiwic2Vzc2lvbkluZGV4IjowfV0=)


## Submissions
- All source code is stored on GitHub
- API is deployed on Render
- README includes an embedded Run in Postman button
- Postman tests run against the deployed endpoint

## Rubric Notes
- Deployment: Complete
- Postman Tests: Complete
- Assertions: Complete

## Resources
- http://nodejs.org
- https://www.passportjs.org/docs/basic-digest/
- https://devcenter.heroku.com/articles/heroku-cli
- https://devcenter.heroku.com/articles/config-vars
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction