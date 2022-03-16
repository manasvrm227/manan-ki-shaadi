import styled from "styled-components";
import BoyLaptop from "../../assets/images/man-working.png";
import GirlLaptop from "../../assets/images/woman-laptop.png";

const Wrapper = styled.div`
width: 100vw;
    .header{
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    .heading{
         p {
        font-family: 'Alex Brush', cursive;
        color: #3f2658;
        font-weight: bold;
        font-size: 70px;
        }
    }
    .boy-image{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .girl-image{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .boy-laptop{
        width: 300px;
        height: 300px;
    }
    .girl-laptop{
        width: 300px;
        height: 300px;
    }
`

const OurStory = () =>{
    return(
        <Wrapper>
            <div className="heading"><p>Our Story</p></div>
            <div className="header">
                <div className="boy-image">
                    <img src={BoyLaptop} alt="boy-laptop" className="boy-laptop"/>
                </div>
                <div className="girl-image">
                <img src={GirlLaptop} alt="boy-laptop" className="girl-laptop"/>
                </div>
            </div>
        </Wrapper>
    )
}

export default OurStory;