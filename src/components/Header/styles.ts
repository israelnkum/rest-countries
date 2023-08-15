import styles from "styled-components";

export const Header = styles.header<{theme: string}>`
    height: 80px;
    background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
    color: ${props => props.theme === 'light' ? '' : '#FFF'};
    transition: all ease 0.2s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    // box-shadow: 0px 2px 9px 0px #000000E;
    // transition: all ease 0.2s;
    
    .container {
        display: flex;
        width: 1150px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
        }

        h1 {
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 33px;
            
        }

        p {
            cursor: pointer;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;

            i {
                padding-right: 10px;
                font-size: 15px;
            }
        }
    }

    @media(max-width: 1024px) {
        &{
            padding: 0px 20px;

            .container {
                width: auto
            }
        }
    }

    @media(max-width: 767px) {
        
        .container {
            height: 100%;
            h1 {
                font-size: 17px;
            }
            p {
                font-size: 14px
            }
        }
    }
`