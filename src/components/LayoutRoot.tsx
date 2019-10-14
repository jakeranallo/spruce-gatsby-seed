import * as React from 'react'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import { client } from '../apollo/client'

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
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </ApolloProvider>
)

export default LayoutRoot
