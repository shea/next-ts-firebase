# Next.js React boilerplate with Typescript on Firebase
This is my starting point for a Next.js React project using Typescript to be
deployed on Firebase hosting with the server side running on Cloud Functions.

It's based on the Next.js [with-firebase-hosting-and-typescript](https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting-and-typescript)
example, and on [react-redux-typescript-example](https://github.com/resir014/react-redux-typescript-example)
by Resi Respati. It also includes Ant Design for UI with a small theme example and a few utilities
like Prettify and presets for VS Code.

## How to use

#### Install project:

```bash
npm install
```

#### Run Next.js development:

```bash
npm run dev
```

#### Run Firebase locally for testing:

```
npm run serve
```

#### Deploy it to the cloud with Firebase:

```bash
npm run deploy
```

#### Clean dist folder

```bash
npm run clean
```

## Important

* The empty `placeholder.html` file is so Firebase Hosting does not error on an empty `public/` folder and still hosts at the Firebase project URL.
* `firebase.json` outlines the catchall rewrite rule for our Cloud Function.
* The [Firebase predeploy](https://firebase.google.com/docs/cli/#predeploy_and_postdeploy_hooks) hooks defined in `firebase.json` will handle linting and compiling of the next app and the functions sourceswhen `firebase deploy` is invoked. The only scripts you should need are `dev`, `clean` and `deploy`.
* Specifying [`"engines": {"node": "8"}`](package.json#L5-L7) in the `package.json` is required for firebase functions
  to be deployed on Node 8 rather than Node 6
  ([Firebase Blog Announcement](https://firebase.googleblog.com/2018/08/cloud-functions-for-firebase-config-node-8-timeout-memory-region.html))
  . This is matched in by specifying target as `es2017` in [`src/functions/tsconfig.json`](src/functions/tsconfig) so that typescript output somewhat compacter and moderner code.
* Ant Design requires lessLoaderOptions: { javascriptEnabled: true } in next.config.js.
  You should not allow any untrusted source for Less styles, such as user input, when using
  this option.
