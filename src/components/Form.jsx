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
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .name-input-container {
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

        .hr-line {
          border-bottom: 2px solid #866938;
          margin: 1px;
        }
        .full-name-inputs-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .password-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .password-input {
          margin: 10px;
          flex: 1;
          padding: 5px;
          border: 1px solid #6d543a;
        }
      `}</style>

      <form>
        <div className={"name-input-container"}>
          <Image
            className={"dragon-image"}
            width={150}
            height={150}
            alt="Dragon"
            src={DragonLeft}
          />
          <div className={"full-name-inputs-container"}>
            <input
              className={"name-input"}
              type="text"
              placeholder="Reveal thy given moniker."
            />
            <div className={"hr-line"}></div>
            <input
              className={"name-input"}
              type="text"
              placeholder="Unveil thy family name."
            />
          </div>
          <Image
            className={"dragon-image"}
            width={150}
            height={150}
            alt="Dragon"
            src={DragonRight}
          />
        </div>
        <div className={"hr-line"}></div>
        <div className={"hr-line"}></div>
        <div className={"password-container"}>
          <input type="password" className={"password-input"} />
          <input type="password" className={"password-input"} />
        </div>
      </form>
    </div>
  );
};
export default Form;
