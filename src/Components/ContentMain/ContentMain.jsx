import Budget from "../Budget/Budget";
import Card from "../Cards/Card";
import Financial from "../Financial/Financial";
import Loans from "../Loans/Loans";
import Report from "../Report/Report";
import Savings from "../Savings/Savings";
import Subscription from "../Subscription/Subscription";
import Transaction from "../Transaction/Transaction";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Card />
        <Transaction />
        <Report />
      </div>

      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscription/>
            <Savings/>
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans/>
            <Financial/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
