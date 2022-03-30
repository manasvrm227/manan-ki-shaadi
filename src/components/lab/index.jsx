import { Wrapper } from "./styles";

const Lab = () => {
  return (
    <Wrapper>
      <div className="lab-description">
        <p>
          Entering into this new phase of life is exciting for us. We get to be
          on each other's side and support each other all life long. We thank
          you for being a part of our lives. <br />
          Feel free to leave us your wishes and blessings
        </p>
        <div className="form-container">
          <div>
            <form className="lab-form" action="POST" data-netlify="true">
              <label>Your name: &nbsp;</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="username"
              ></input>
              <br />
              <br />
              <label>Your wish/blessing: &nbsp;</label>
              <textarea
                placeholder="Enter your message"
                rows="10"
                name="message"
              ></textarea>
              <br />
              <br />
              <div data-netlify-recaptcha="true"></div>
              <br />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Lab;
