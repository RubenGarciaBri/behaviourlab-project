# Behaviour Lab Project

This is a little game built in React and Redux as part of a project for a technical interview.

You can place a little robot on a 5x5 grid and give it instructions to move it around without falling off the table.

# How to Run

```
install dependencies
$ npm install

start project
$ npm start
```

# Technologies used

1. React
1. Redux + Middleware
1. ES6 Features
1. React Hooks
1. SASS and CSS Animations
1. Toastify for UI notifications

# Assumptions and notes

1. The app is not responsive as there was nothing mentioned in the requirements.
1. In order to use the rotate, move and report commands, you first must place the robot on the grid by giving it 2 coordinates and a facing direction.
1. I've added and extra "Block/Unblock" action so the robot triggers an animation when it can no longer move at the edges.
1. I've used Toastify to show an error notification (HelpBox.js) when the user tries to run a command that is not "Place" at the start of the game.
1. The app figures out the CSS location values of every cell based on the reference values at (0, 0). These are dependent on the grid dimensions and the size of the robot's image, which I have manually chosen. This is explained further in the comments inside the robot's component.

# See it on the browser

[Play online on this version deployed to Netlify](https://behaviourlab-project.netlify.app/)

# Author

- **Ruben Garcia Bri** -
  [Github](https://github.com/RubenGarcia7)
