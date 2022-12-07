# React app hosted on GitHub Pages

* This project was created with [Create React App](https://github.com/facebook/create-react-app)
* The UI-specific code was written in [CodeSandbox](https://codesandbox.io/s/select-package-test-forked-liyr9k) and migrated manually
* GitHub Pages were deployed based on these [instructions](https://github.com/gitname/react-gh-pages):
   * Exception: in `package.json` -> instead of `"https://Jyri-droid.github.io/select-package"`, `"homepage"` needs to be `"/select-package/#"`
   * Addition: `<Router>` component needs a base name. In `App.js` -> `<Router basename="/select-package">`

## Creating a new build
* Push code to GitHub as usual: `git add .` + `git commit -m "message"` + `git push`
* After pushing, type in terminal: `npm run deploy`

### Editing Read me
* [GitHub markup guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
