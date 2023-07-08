const Notification = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <p>{text}</p>;
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Notifications</h1>
    <div>
      <div className="information-message">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <p>
          <Notification text="Information message" />
        </p>
      </div>
      <div className="success-message">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p>
          <Notification text="Success message" />
        </p>
      </div>
      <div className="warning-message">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <p>
          <Notification text="Warning message" />
        </p>
      </div>
      <div className="error-message">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
        <p>
          <Notification text="Error message" />
        </p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
