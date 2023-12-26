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
          height: 100%;
          flex: 1;
        }
        .name-input {
          text-align: center;
          background-color: #e3e4e9;  
          font-size: 1.3rem;
          color: #4f372b;
          padding: 10px;
          width: 100%;
          height: 100%;
          border: 2px solid #3a260a;
        }
        .name-input::placeholder{
            color: #835b47;
        }
      `}</style>

      <form>
        <input
          className={"name-input"}
          type="text"
          placeholder="Reveal thy given moniker"
        />
      </form>
    </div>
  );
};
export default Form;
