import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../utils/index";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AccountPage = ({setModal}) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUpClick = () => {
    setIsSignIn(true);
  };

  const handleSignInClick = () => {
    setIsSignIn(false);
  };

  return (
    <div className="flex">     
      {isSignIn ? (       
        <SignIn handleSignInClick={handleSignInClick}  setModalVisible={setModal}/>
      ) : (
        <SignUp handleSignUpClick={handleSignUpClick}/>
      )}
      <div className="flex w-[300px] items-center justify-center bg-[rgba(104,219,237,0.27)]">
        <div>
          <img src={images.Login} className="h-[203px] w-[203px]" alt="Login" />
          <div className="text-center mt-[30px]">
            <h4 className="text-[17px] text-[#0B74E5]">Mua sắm tại WolfShop</h4>
            <span className="text-[13px] text-[#0B74E5]">Siêu ưu đãi mỗi ngày</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
