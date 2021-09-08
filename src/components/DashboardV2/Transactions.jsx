import "./index.css";

const Transactions = () => {
  return (
    <div className="card transection" style={{ delay: "1.2s" }}>
      <div className="transection-header">
        <div className="head" style={{ marginBottom: "16px" }}>
          Transactions
        </div>
        <div className="head is-wait" style={{ marginBottom: "16px" }}>
          View All
        </div>
      </div>
      <div className="credit-wrapper">
        <img src="https://cdn.discordapp.com/attachments/816290918046498856/885243057577029703/Untitled_design_61.png" />
        <div className="credit-name">
          <div className="credit-type">B.Sc.</div>
          <div className="credit-status">Transaction executed</div>
        </div>
        <div className="credit-money is-active" style={{ fontSize: "12px" }}>
          +100 credits
        </div>
      </div>
      <div className="credit-wrapper">
        <img src="https://cdn.discordapp.com/attachments/816290918046498856/885243057577029703/Untitled_design_61.png" />
        <div className="credit-name">
          <div className="credit-type">B.A.</div>
          <div className="credit-status">Transaction executed</div>
        </div>
        <div className="credit-money is-active" style={{ fontSize: "12px" }}>
          +100 credits
        </div>
      </div>
      <div className="credit-wrapper">
        <img src="https://cdn.discordapp.com/attachments/816290918046498856/885243057577029703/Untitled_design_61.png" />
        <div className="credit-name">
          <div className="credit-type">B.Tech</div>
          <div className="credit-status">In Process</div>
        </div>
        <div className="credit-money is-wait" style={{ fontSize: "12px" }}>
          +50 credits
        </div>
      </div>
      <div className="credit-wrapper">
        <img src="https://cdn.discordapp.com/attachments/816290918046498856/885243057577029703/Untitled_design_61.png" />
        <div className="credit-name">
          <div className="credit-type">B.Com</div>
          <div className="credit-status">Cancelled</div>
        </div>
        <div className="credit-money is-cancel" style={{ fontSize: "12px" }}>
          +30 credits
        </div>
      </div>
    </div>
  );
};
export default Transactions;
