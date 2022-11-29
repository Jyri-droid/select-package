const Notification = (props) => {
  return (
    <>
      <div className={`notification ${props.success && "success"}`}>
        <h3>{props.title}</h3>
        {props.list && (
          <ul>
            {props.list.map((element, index) => (
              <li key={"list" + index}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Notification;
