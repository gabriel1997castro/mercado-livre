import styled from 'styled-components'
import theme from '../theme'

type RowProps = {
  flex?: string
  alignItems?: 'stretch' | 'start' | 'end' | 'center'
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${(props: RowProps) => props.flex || '1'};
  align-items: ${(props: RowProps) => props.alignItems || 'stretch'};
  justify-content: ${(props: RowProps) => props.justifyContent || 'start'};
`

type ColumnProps = {
  flex?: string
  justifyContent?: 'stretch' | 'start' | 'end' | 'center'
  alignItems?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props: ColumnProps) => props.flex || '1'};
  padding: 2rem;
  align-items: ${(props: ColumnProps) => props.alignItems || 'stretch'};
  justify-content: ${(props: ColumnProps) => props.justifyContent || 'start'};
`

type ButtonProps = {
  backgroundColor?: typeof theme.colors.button.background
  color?: typeof theme.colors.button.text
  theme: typeof theme
  disabled?: boolean
}
export const Button = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.backgroundColor || props.theme.colors.button.background.primary};
  color: ${(props: ButtonProps) =>
    props.color || props.theme.colors.button.text.primary};
  outline: none;
  border: none;
  cursor: pointer;
  opacity: ${(props: ButtonProps) => props.disabled && 0.6};
  cursor: pointer;
  border-radius: 0.2rem;
  height: 2.4rem;
`
