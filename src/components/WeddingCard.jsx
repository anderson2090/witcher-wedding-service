import Heading from "./Heading";
import TopRow from "./TopRow";

const WeddingCard = () => {
  return (
    <div className={"main"}>
      <style jsx>
        {`
          .main {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #c2a078;
            border-radius: 2px;
            flex: 1;
            height: 97%;
            margin: 10px;
          }
          .second {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #c2a078;
            height: 99%;
            flex: 1;
            margin: 2px;
          }
        `}
      </style>
      <div className="second">
        <Heading />
        <TopRow />
      </div>
    </div>
  );
};
export default WeddingCard;
