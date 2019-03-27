![Logo](https://raw.githubusercontent.com/redux-observable/redux-observable/HEAD/logo/logo-small.gif)

# Go reactive with redux-observable and RxJS
This repository contains a set of samples that shows how [Redux-Observable](https://redux-observable.js.org/) and 
[RxJS](https://rxjs-dev.firebaseapp.com/) can help you to take a reactive approach when buiding React applications. This not only helps in providing a better overall design (as it makes separation of concerns easier), but also improves other ways of managing async code in Redux.

You can watch an introduction to the reactive approach to Redux in these two presentations from [Ben Lesh](https://www.youtube.com/watch?v=sF5-V-Szo0c) and [Jay Phelps](https://www.youtube.com/watch?v=AslncyG8whg), both from Netflix.

You can take an introduction to Reactive Programming by reading [this awesome article](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) by Andre Staltz and also watching this [short video](https://youtu.be/BfZpr0USIi4).

 
## Samples
### Separation of concerns
Redux-thunk is the _de facto_ middleware used for managing asynchronous logic in Redux. However, as you start adding multiple concerns into an action, your logic becomes difficult to follow, mantain and reason about. You then might think on decoupling concerns that need to be kicked off at a moment in time. Meaning, you would want to embrace event sourcing (reactive style) over command pattern (imperative style).
In this sample, _quantity_ does not instruct anything in regards to _price_, because it is not its concern. However, _price_ reacts to changes in _quantity_.

### Managing async logic and API calls
What also makes redux-observable so interesting is the ability to handle asynchronous functions. In these samples we use the _mergeMap_, _catchError_ and _race_ operators to enable error management and async code cancellation, which is not possible using Redux-thunk. The samples also demonstrate that using Redux-observable you easily get rid of the callback-hell introduced by Redux-thunk.

### Buffer (playing with operators, sample I)
RxJs provide [tens of operators](https://www.learnrxjs.io/operators/). This sample plays with _scan_ and _buffer_. It also makes use of the _state$_ stream to access the state from an epic.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
