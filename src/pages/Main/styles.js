import styled from "styled-components";

export const Container = styled.main`
  width: 993px;
  height: 312px;
  border: 1px solid #d3d3d3;
  background-color: #fff;

  img.logo {
    margin: 10px;
    margin-right: auto;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100vh;
    height: auto;
    margin: 0px;
    align-items: center;
    justify-content: center;
    img.logo {
      margin: 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 300px;
    height: auto;
    align-items: center;
    justify-content: center;
    img.logo {
      margin: 0;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  margin-right: auto;
  margin-bottom: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    border: none;
    color: #888;

    svg {
      color: #888;
      margin-right: 20px;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #b2b2b2;
      font-size: 14px;

      &.tabBtnType {
        color: #888;
        font-size: 24px;
      }
    }

    &.actived {
      border-bottom: 2px solid red;
      color: red;
      svg {
        color: red;
        margin-right: 20px;
      }

      &.tabBtnType {
        color: red;
        font-size: 24px;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    button {
      margin: 0;
      padding: 0;
      width: 200px;
    }
  }
`;

export const Checks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-bottom: 10px;

  label {
    margin-right: 20px;

    input {
      margin-right: 5px;
    }
  }
`;

export const Fields = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
  flex-flow: wrap;

  select {
    width: 280px;
    height: 30px;
    border: 1px solid #dedede;
    margin: 2px 0px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  width: 900px;

  button.searchBtn {
    margin-right: auto;
    background: none;
    border: none;
    color: #a92b2b;
    font-size: 18px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    transform: transition 0.2s;

    &:hover {
      color: red;
    }
  }

  button.clearFilters {
    background: none;
    border: none;
    color: #b2b2b2;
    font-size: 18px;
    margin-left: auto;

    transform: transition 0.2s;

    &:hover {
      color: #0a0a0a;
    }
  }

  button.showOffers {
    height: 50px;
    width: 350px;
    background: #a92b2b;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bolder;
    font-size: 22px;
    margin-left: 30px;
    transform: transition 0.2s;

    &:hover {
      background: red;
    }
  }

  @media (max-width: 800px) {
    width: 300px;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
