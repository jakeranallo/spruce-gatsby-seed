import * as React from 'react'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import { client } from '../apollo/client'
import { SpruceProvider } from '../global'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <ApolloProvider client={client}>
    <SpruceProvider>
      <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    </SpruceProvider>
  </ApolloProvider>
)

export default LayoutRoot
