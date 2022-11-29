const Select = (props) => {
  return (
    <>
      <select name={props.name} onChange={props.onChange}>
        {props.options.map((element, index) => (
          <option value={element} key={"select" + index}>
            {element}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
