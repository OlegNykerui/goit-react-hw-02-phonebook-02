import { Input } from 'components/Form/Form.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Input
        onChange={onChange}
        type="text"
        value={value}
        name="filter"
        id="filter"
      />
    </div>
  );
};

export default Filter;
