import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #25262c;
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 130px;
  padding-right: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Div = styled.div`
  height: 100%;
  width: 80%;
  background-color: #1b1c22;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 10px;
`

export const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Img = styled.img`
  height: 87%;
  width: 78%;
`

export const TextContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  height: 45px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin-left: 0px;
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
  margin-right: 10px;
`
export const Hr = styled.hr`
  width: 100%;
  border: 1px solid #334155;
  margin-top: 0px;
`
export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  color: #cbd5e1;
  background-color: transparent;
  border-radius: 6px;
  padding: 20px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  font-style: ${props => props.style};
  font-weight: ${props => props.bold};
  text-decoration: ${props => props.textUl};
`
