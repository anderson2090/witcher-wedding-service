import Form from "./Form";
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
            border: 2px solid #b8a47d;
            border-radius: 2px;
            flex: 1;
            height: 97%;
            margin: 10px;
          }
          .second {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            border: 1px solid #b8a47d;
            height: 99%;
            flex: 1;
            margin: 2px;
          }
          h1 {
            font-size: 4rem;
            color: #3e4d50;
          }
          h2 {
            font-size: 2rem;
            color: #2f1600;
          }
        `}
      </style>
      <div className="second">
        <Heading />
        <TopRow />
        <h1>Witcher Wedding Planners</h1>
        <h2>Turning your magical day into a monster-free memory!</h2>
        <Form />
      </div>
    </div>
  );
};
export default WeddingCard;
