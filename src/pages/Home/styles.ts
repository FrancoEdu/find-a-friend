import styled from 'styled-components'

export const Container = styled.div`
    background-color: #F15156;
    min-height: 100vh;

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

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        .state{
            height: 3.5rem;
            width: 3.5rem;
            border-radius: 8px;
            text-align: center;
            background: transparent;
            color: white;
            border: 1px solid white;
            font-weight: 700;
            font-size: 18px;
        }
        .city{
            height: 3.5rem;
            width: 15rem;
            border-radius: 8px;
            text-align: center;
            background: #E44449;
            color: white;
            border: 0;
            font-weight: 700;
            font-size: 18px;
            border: 0;
        }

        button{
            height: 3.5rem;
            width: 3.5rem;
            border-radius: 15px;
            align-items: center;
            text-align: center;
            border: 0;
            background: #F4D35E;
            gap: 5px;
        }
    }
`


