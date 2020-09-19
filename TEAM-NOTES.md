# Notes:

- The app was created with Create-React-App and TypeScript.

- Most of the components and hooks were scaffolded with a VS Code extension, so each one is wrapped in a folder with its respective test files. I usually enjoy working that way, because it's very good for productivity and paves the way for enforcing good practices. It also creates the necessary code to create tests, in this case they were not implemented due to time time allowed to work.

- I followed a very opinionated file structure, which, in my opinion, is good enough for medium and large projects.

- Authentication is just a placeholder, but a context was implemented in a very similar way to a real application.

- I tried to add several "real world" resources as I could, to show how I can help the team. That includes, dummy components, load indicators, error handlers, layouts, lazy loading, hooks for data fetching and management, etc.

# About missing stuff

- The Team Feedback and Teams pages were not implemented. The API only allows certain level of operation, and the authentication does not allow much. But the main logic was implemented in its entirety. Certain things like the bottom indicators for the pending questions were not added due to the time frame.

- The unit tests are only placeholders, a certain basic level of testing was in the plan, but, again, the time frame. This is certainly something I would love to work on. Also e2e tests.

- Responsiveness was implemented in a very basic way, however it is incomplete. It was not a requirement, but I think a Mobile-Frist strategy is very important.

# What things would I have done differently?

In every code review, problems will arise, that's for sure. However, instead of focusing on doing it differently, I would concentrate on implementing unit tests, e2e tests, and an initial CI/CD pipeline (real time previews for dog fooding is great). In a second step, a review can be done and we can improve the user interface to be pixel-perfect.
