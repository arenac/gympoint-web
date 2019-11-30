import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  padding: 30px 70px;
`;

export const Header = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 20px;
  }

  aside {
    button {
      background: ${props => (props.isgray ? '#999' : '#de3b3b')};
      color: #fff;
      padding: 4px 15px;
      margin-right: 5px;
      border-radius: 4px;
      font-weight: bold;

      &:hover {
        background: ${props =>
          props.isgray ? darken(0.05, '#999') : darken(0.05, '#de3b3b')};
      }
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  form {
    flex: 1;
    display: grid;

    label {
      margin: 10px 0 5px 0;
      font-weight: bold;
    }

    input {
      flex: 1;
      height: 25px;
      border-radius: 4px;
      border: 1px solid #eee;
      margin-right: 10px;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: row;

      div {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
