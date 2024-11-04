import CustomeNavBar from "./CustomeNavBar";

const Base = ({ title = "welcome to our website", children }) => {
  return (
    <div>
      <CustomeNavBar className="container-fluid p-0 m-0" />
      {children}
      <h1>This is our Footer</h1>
    </div>
  );
};

export default Base;
