/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Layout } from 'antd'
import PageHeader from './PageHeader'

const { Header, Content, Footer } = Layout

const Page: React.SFC = ({ children }) => (
  <Layout className="layout">
    <Header>
      <PageHeader navHeight={64} />
    </Header>
    <PageContent>{children}</PageContent>
    <PageFooter>Example page footer</PageFooter>
  </Layout>
)

export default Page

const PageContent = styled(Content)`
  padding: 50px;
  min-height: 500px;
`

const PageFooter = styled(Footer)`
  text-align: center;
  color: #fff;
`
