import Notification from "./Notification";

const Success = (props) => {
  return (
    <>
      <h1>Select product package</h1>
      <Notification
        success
        title="Your selection has been saved"
        list={props.form}
      />
    </>
  );
};
export default Success;
