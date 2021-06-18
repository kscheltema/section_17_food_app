import classes from "./Checkout.module.css";

const Checkout = (props) => {
  <form>
    <div className={classes.control}>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name"></input>
    </div>
    <div className={classes.control}>
      <label htmlFor="name">Your Street</label>
      <input type="text" id="street"></input>
    </div>
    <div className={classes.control}>
      <label htmlFor="name">Your Postal Code</label>
      <input type="text" id="postal"></input>
    </div>
    <div className={classes.control}>
      <label htmlFor="name">Your City</label>
      <input type="text" id="city"></input>
    </div>
    <button>Confirm</button>
  </form>;
};

export default Checkout;
