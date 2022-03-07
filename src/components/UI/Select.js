import styled from 'styled-components';
import Card from './Card';

const SelectElement = styled.select`
  width: 100%;
  height: 50px;
  background-color: inherit;
  color: inherit;
  padding: 10px;
  border: none;
  outline: none;

  & option:disabled {
    display: none;
  }
`;

const Select = props => {
  return (
    <Card>
      <SelectElement
        className={props.className}
        value={props.value}
        onChange={props.onChange}
      >
        {props.children}
      </SelectElement>
    </Card>
  );
};

export default Select;
