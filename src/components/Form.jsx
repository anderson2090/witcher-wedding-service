import Image from "next/image";
import DragonLeft from "/public/dragon-left.png";
import DragonRight from "/public/dragon-right.png";
const Form = () => {
  return (
    <div className={"main"}>
      <style jsx>{`
        .main {
          display: flex;
          justify-content: center;
          width: 70%;
        }
        form {
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100%;
          flex: 1;
        }
        .name-input {
          border-radius: 5px;
          text-align: center;
          background-color: #e3e4e9;
          font-size: 1.3rem;
          color: #4f372b;
          padding: 10px;

          width: 100%;
          height: 100%;
          border: 2px solid #3a260a;
        }
        .name-input::placeholder {
          color: #835b47;
        }
        .name-input-inner-container {
          padding: 1px;
          border-bottom: 1px solid #bec2d4;
        }
        .name-input-outer-container {
          flex: 1;
          padding: 1px;
          border-bottom: 2px solid #3a260a;
        }
      `}</style>

      <form>
        <Image
          className={"dragon-image"}
          width={150}
          height={150}
          alt="Dragon"
          src={DragonLeft}
        />
        <div className={"name-input-outer-container"}>
          <div className={"name-input-inner-container"}>
            <input
              className={"name-input"}
              type="text"
              placeholder="Reveal thy given moniker"
            />
          </div>
        </div>
        <Image
          className={"dragon-image"}
          width={150}
          height={150}
          alt="Dragon"
          src={DragonRight}
        />
      </form>
    </div>
  );
};
export default Form;
