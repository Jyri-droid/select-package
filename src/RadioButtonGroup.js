const RadioButtonGroup = (props) => {
  const radioButtons = props.texts.labels.map((element, index) => {
    return (
      <div key={"radiobutton" + index}>
        <input
          type="radio"
          name={props.texts.title ? props.texts.title : "Account"}
          value={element}
          defaultChecked={index === 0 && "true"}
        ></input>
        <label htmlFor={element}>{element}</label>
        <br />
      </div>
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
