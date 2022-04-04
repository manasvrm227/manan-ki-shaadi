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
            <form
              className="lab-form"
              name="lab"
              // method="post"
              // data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="lab" />
              <label>Your name: &nbsp;</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="username"
                disabled="true"
                required
              ></input>
              <br />
              <br />
              <label>Your wish/blessing: &nbsp;</label>
              <textarea
                placeholder="Enter your message"
                rows="10"
                disabled="true"
                name="message"
                required
              ></textarea>
              <br />
              <br />
              <button
                // type="submit"
                disabled="true"
              >
                Send
              </button>
              <br />
              *disabled now as we received a lot of love from you guys which
              over-flooded our inboxes.
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Lab;
