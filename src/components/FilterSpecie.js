function FilterSpecie(props) {
  const handleSpecie = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className='form__specie content-select'>
      {/* <p> Search specie </p> */}
      <select
        name='specie'
        id='specie'
        className='form__specie--select'
        onChange={handleSpecie}
      >
        <option value='all'>SPECIE</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
        <option value='Robot'>Robot</option>
        <option value='Animal'>Animal</option>
      </select>
      <i></i>
    </div>
  );
}

export default FilterSpecie;
