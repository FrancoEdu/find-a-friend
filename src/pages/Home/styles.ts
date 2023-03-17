import styled from 'styled-components'

export const Container = styled.div`
    background-color: #F15156;
    height: 100vh;
    width: 100%; 

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
`
export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-left: 10rem;
    padding-right: 10rem;
`
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    padding-top: 5rem;
`

export const Medium = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div{
        display: grid;
        h1{
            font-size: 72px;
        }
    }
`
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 20px;
    }
`


