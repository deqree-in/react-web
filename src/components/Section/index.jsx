import Card from "./Card";
import { useMediaQuery } from "@material-ui/core";
import "./index.css";

const Section = ({ title, subtitle, points }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className="wrapper">
      <div className="heading">
        <div
          className="title deq"
          id="why-deqree"
          style={{ paddingLeft: !isMobile && "11%" }}
        >
          {title}
        </div>
        <div className="subtitle" style={{ paddingLeft: !isMobile && "11%" }}>
          {" "}
          {subtitle}{" "}
        </div>
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
