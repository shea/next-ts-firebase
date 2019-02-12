/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Menu } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'
import * as React from 'react'

interface HeaderProps {
  navHeight: number
  router
}

const PageHeader: React.SFC<HeaderProps> = ({ navHeight, router }) => (
  <header>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <NavMenu navHeight={navHeight} router={router}>
      <Menu.Item key="/">
        <Link prefetch={true} href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/example">
        <Link prefetch={true} href="/example">
          <a>Example</a>
        </Link>
      </Menu.Item>
    </NavMenu>
  </header>
)

export default withRouter(PageHeader)

const headerHeight = (height: number) =>
  css({
    lineHeight: `${height}px`,
  })

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(120, 120, 120, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`

const NavMenu = ({
  navHeight,
  router,
  children,
}: {
  navHeight: number
  router
  children?: any
}) => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={[router.pathname]}
    css={headerHeight(navHeight)}
  >
    {children}
  </Menu>
)
