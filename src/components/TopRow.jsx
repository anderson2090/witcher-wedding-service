import Image from "next/image";
import Medallion from "/public/medallion.png";
import Chain from "/public/chain.png";
import FlowersRight from "/public/flowers-right.png";
import FlowersLeft from "/public/flowers-left.png";
import GSignature from "/public/g-signature.png";
import YSignature from "/public/y-signature.png";
const TopRow = () => {
  return (
    <div className="main">
      <style jsx>{`
        .main {
          display: flex;
          width: 100%;
          height: 30%;
          flex: 1;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
      <Image width={300} height={300} src={FlowersLeft} alt="flowers" />
      <Image
        className={"signature"}
        width={50}
        height={50}
        src={GSignature}
        alt="signature"
      />
      <Image width={300} height={300} src={Medallion} alt="medallion" />
      <Image
        className={"signature"}
        width={50}
        height={50}
        src={YSignature}
        alt="signature"
      />
      <Image
        className={"flowers"}
        width={300}
        height={300}
        src={FlowersRight}
        alt="flowers"
      />
    </div>
  );
};

export default TopRow;
