import Image from "next/image";
import SLogo from "/public/s.png";
import InvertedSLogo from "/public/inverted-s.png";
const Heading = () => {
  return (
    <div className="main">
      <style jsx>{`
        .main {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        p {
          color: #7a5833;
          
        }
      `}</style>

      <Image alt="s shaped logo" width={30} height={30} src={InvertedSLogo} />
      <p>Monsters Hate Wedding Crashers!</p>
      <Image alt="s shaped logo" width={30} height={30} src={SLogo} />
    </div>
  );
};

export default Heading;
