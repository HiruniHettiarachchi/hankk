import React from "react";
/*import styled from "styled-components";
import bgImg from "./image/bgImg.jpg";*/

function Signin() {
  return (
    /*<Container>
      <SubContainer>*/
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Sign in</h1>
            <p>Sign in and start managing your stocks!</p>
            <div className="username">
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className="password">
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className=" checkbox">
              <checkbox> Remember me</checkbox>
              <p> <a href="link3"> Forgot password? </a> </p>
            </div>
            <div className="login-button">
              <button>Sign In</button>
            </div>
            <p>or</p>
            <p className="link">
              {" "}
              <a href="gSignup"> Continue with Google </a>{" "}
            </p>
            <p>
              New to HanKk? <a href="/signup">Create an account</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>    
      /*</SubContainer>
    </Container>*/
  );
}

export default Signin;

/*const Container = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100vh;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 550px;
  width: 35%;
  box-shadow: 11px 12px 13px 12px rgb(207, 207, 207);
  padding-top: 30px;
  border-radius: 60px;
  background-color: white;
`;*/
