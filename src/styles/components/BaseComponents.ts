import styled from 'styled-components'

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
