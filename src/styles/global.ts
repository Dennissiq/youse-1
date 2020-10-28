import { createGlobalStyle } from 'styled-components'
import { yellow } from '../constants'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: url('/background.jpg');
    font-size: 14px;
    color: ${yellow};
    font-family: sans-serif;
  }
  input {
    width: 80vw;
    max-width: 600px;
    margin: 30px auto;
    display: block;
    height: 40px;
    padding-left: 10px;
    color: #2f3941;
    border-radius: 6px;
    border: 1px solid ${yellow};
    text-align: center;
  }
  li {
    list-style: none;
  }
  .paginate {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;
    width: 320px;
    margin: 40px auto;
    padding: 0 20px;

    &__item a, &__dots a {
      width: 30px;
      height: 30px;
      text-align: center;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background .2s ease-in;
      &:hover {
        background-color: #fff;
      }
    }

    .previous, .next {
      opacity: 1;
      transition: opacity .3s linear;
      &.disabled {
        opacity: 0;
      }
    }

    .selected a {
      background-color: #fff;
    }
  }
  
`
