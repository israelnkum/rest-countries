import styles from "styled-components";

export const InputArea = styles.section<{theme: string}>`
    display: flex;
    width: 1150px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0px;
    transition: all ease 0.2s;

    .textAreaDiv {
        background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
        box-shadow: 0px 2px 9px 0px #0000000E;
        border-radius: 5px;
        padding: 0 0 0 10px;
        color: ${props => props.theme === 'light' ? '' : '#FFF'};
    }
    input {
        background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
        border-radius: 5px;
        width: 480px;
        height: 56px;
        padding: 0px 10px;
        border: none;
        outline: 0;
        font-size: 14px;
        
        ::placeholder {
            font-weight: 400;
        }
    }
    i {
        margin: 0 20px 0 20px;
        color: #848484;
    }

    .dropdown {
        position: relative;
        display: inline-block;
      
        .dropdown-toggle {
          width: 200px;
          height: 56px;
          background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
          color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
          border: none;
          border-radius: 5px;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0px 2px 9px 0px #0000000E;
        }
        
        .dropdown-toggle i {
            margin-left: 5px;
            transition: transform 0.2s ease;
            color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
        }
        
        .dropdown-menu {
            position: absolute;
            z-index: 1;
            top: 100%;
            left: 0;
            width: 183px;
            max-height: 200px;
            overflow-y: auto;
            background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
            color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
            border: none;
            border-radius: 5px;
            box-shadow: 0px 2px 9px 0px #0000000E;
            padding: 10px;
            margin-top: 10px;
        }
      
        .dropdown-item {
          padding: 5px 10px;
          cursor: pointer;
          transition: all 0.2s ease;
      
          &:hover {
            background-color: ${props => props.theme === 'light' ? '#b9b5b536' : '#1e1e1e'};
          }
        }
      }
      


    @media(max-width: 1024px) {
        & {
            width: auto;
            padding: 20px;
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            input {
                width: 60%;
            }
            .dropdown-toggle {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }
`