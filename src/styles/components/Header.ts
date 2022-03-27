import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-style: none;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  padding-left: 1rem;
  padding-right: 1rem;
  min-width: 10rem;

  &:focus {
    outline: none;
  }
`

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  padding-left: 0.3rem;
  background-color: ${props => props.theme.colors.tertiaryBackground};
`
export const IconContainer = styled.div`
  display: flex;
  width: 3rem;
  min-width: 2rem;
  height: 2rem;
  background-color: #efefef;
  align-items: center;
  justify-content: center;
`
export const SearchIcon = styled.img`
  height: 1rem;
  color: grey !important;
`
