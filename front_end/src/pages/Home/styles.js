import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  padding: 15px;

  h1 {
    margin: 0;
    padding: 0;
  }

  div {
    display:  flex;
    flex-direction: column;

    span {
      margin-bottom: 10px;
    }
    
    button {
      border: none;
      border-radius: 5px;
      padding: 5px;
      min-width: 80px;
      background-color: red;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      flex: 1;
  
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const BeerContainer = styled.div`
  padding: 10px 80px;
  
  .row{
    border: 1px solid #eee;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    display: flex;

    .col {
      flex: 1;

      img {
        height: 80px;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  margin: 25px 0;
  display: flex;

  .content {
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .btn {
    background-color: #fab717;
    color: #fff;
    font-size: 22px;
    border: none;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 8px;
    
    &:hover {
      opacity: 0.5;
    }
  }

  .active {
    background-color: #fab717;
    color: #fff;
  }
  
  .numbers {
    border-radius: 8px;
    border: 1px solid;
    padding: 15px;
    font-size: 18px;
    margin: 0 2px;
    cursor: pointer;
    width: 53px;

    &:hover {
      opacity: 0.5;
    }
  }
`;