import Card from "./Card";
import "./index.css";

const Section = ({ title, subtitle, points }) => {
  return (
    <div className="wrapper">
      <div className="heading">
        <div className="title deq" id="why-deqree">
          {title}
        </div>
        <div className="subtitle"> {subtitle} </div>
      </div>
      <div className="points">
        {points.map((point, ndx) => (
          <Card
            key={ndx}
            // icon={<i className="fab fa-bitcoin"></i>}
            title={point.title}
            desc={point.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
