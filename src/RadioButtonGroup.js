const RadioButtonGroup = (props) => {
  const radioButtons = props.texts.labels.map((element, index) => {
    return (
      <label key={"radiobutton" + index}>
        <input
          type="radio"
          name={props.texts.title ? props.texts.title : "Account"}
          value={element}
          defaultChecked={index === 0 && "true"}
        />
        {element}
        <br />
      </label>
    );
  });
  return (
    <>
      <h2>{props.texts.title}</h2>
      {radioButtons}
    </>
  );
};

export default RadioButtonGroup;
