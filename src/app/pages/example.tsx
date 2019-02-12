/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { connect } from 'react-redux'

import { Alert, Button, Spin } from 'antd'
import Page from '../components/layout/Page'

import { Dispatch } from 'redux'
import { ApplicationState, ConnectedReduxProps } from '../store'
import { fetchRequest } from '../store/example/actions'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class ExamplePage extends React.Component<AllProps> {
  // Bind click handler function
  constructor(props: AllProps) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  public render() {
    const { loading } = this.props

    return (
      <Page>
        <div>
          <Button type="primary" onClick={this.handleButtonClick}>
            Example
          </Button>
          {loading && <Loading />}
        </div>
      </Page>
    )
  }

  // Handle button click by calling fetchRequest from dispatch
  private handleButtonClick() {
    this.props.fetchRequest()
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ example }: ApplicationState) => ({
  loading: example.loading,
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamplePage)

const Loading = () => (
  <div
    css={{
      margin: 20,
      maxWidth: 400,
    }}
  >
    <Spin tip="Loading...">
      <Alert
        message="Example alert"
        description="Further details about the context of this alert."
        type="info"
        css={{ height: 200 }}
      />
    </Spin>
  </div>
)
