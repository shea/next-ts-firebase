import Page from '../components/layout/Page'

export default () => (
  <Page>
    <h1>Welcome!</h1>

    <p>Welcome to the Next.js + TypeScript for Firebase boilerplate</p>
    <p>
      This is my starting point for a Next.js React project using Typescript to be deployed on
      Firebase hosting with the server side running on Cloud Functions.
    </p>

    <p>
      It's based on the Next.js{' '}
      <a href="https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting-and-typescript">
        with-firebase-hosting-and-typescript
      </a>{' '}
      example, and on{' '}
      <a href="https://github.com/resir014/react-redux-typescript-example">
        react-redux-typescript-example
      </a>{' '}
      by Resi Respati. It also includes Ant Design for UI with a small theme example and a few
      utilities like Prettify and presets for VS Code.
    </p>
  </Page>
)
