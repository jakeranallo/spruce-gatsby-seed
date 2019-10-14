import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

export interface IntInput {
  required?: boolean
  type?: string
  value?: string
  placeholder?: string
}

export type InputProps = IntInput & SpaceProps & LayoutProps

export const Input = styled.input<InputProps>`
  ${space}
  ${layout}
`
