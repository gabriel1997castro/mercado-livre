import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.colors.tertiaryBackground};
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-style: none;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: 10rem;

  &:focus {
    outline: none;
  }
`

export const IconContainer = styled.button`
  display: flex;
  width: 3rem;
  min-width: 2rem;
  height: 2rem;
  background-color: #efefef;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
`
export const SearchIcon = styled.img`
  height: 1rem;
  color: grey !important;
`
