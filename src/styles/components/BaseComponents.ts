import styled from 'styled-components'
import theme from '../theme'

type RowProps = {
  flex?: string
}
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${(props: RowProps) => props.flex || '1'};
`

type ColumnProps = {
  flex?: string
}
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props: ColumnProps) => props.flex || '1'};
  padding: 2rem;
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
