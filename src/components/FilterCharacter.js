function FilterCharacter (props) {

  const handleSearch = ev => {
    props.handleChange(ev.target.value);
  };

  return (
    <input
    type={props.type}
    name={props.name}
    id={props.id}
    placeholder={props.placeholder}
    onChange={handleSearch}
    value={props.value}
    className={props.class}
  />
  );
};

export default FilterCharacter;