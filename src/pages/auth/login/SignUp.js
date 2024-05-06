import React, { useState } from "react";

import { Spin } from "antd";

import InputComponent from "../../../components/InputComponent/InputComponent";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import { images } from "../../../utils/index";
import * as UserService from "../../../service/UserService";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import * as message from "../../../components/MessageComponent/Message";
import { updateUser } from "../../../redux/slides/userSlide";

const SignUp = ({ handleSignUpClick }) => {
  const mutation = useMutationHooks((data) => UserService.signUpUser(data));

  console.log(mutation);

  const { data, isPending } = mutation;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleGoToSignIn = () => {
    handleSignUpClick();
  };

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword }, {
      onSuccess: (data) => {
        if (data?.status === "ERR") {
          message.error("Sign up failed");
        } else {
          message.success("Sign up successfully");
        }
        handleGoToSignIn();
      },
      onError: () => {
        message.error("Sign up failed");
      },
    });
  };
  return (
    <div className=" w-[500px] flex-col p-[40px]">
      <div className="mb-5">
        <h4 className="font-sans text-[24px] text-[#000000]">
          Tạo tài khoản mới
        </h4>
        <p>Đăng ký hoặc quay lại đăng nhập</p>
      </div>

      <div className="flex-col">
        <div className="border-b-[1px] border-b-[#a8a8a8]">
          <InputComponent
            placeholder="abc@gmail.com"
            className={
              "w-full border-none py-[10px] text-[18px] focus:border-none focus:outline-none"
            }
            value={email}
            onChange={handleOnChangeEmail}
          />
        </div>
        <div className="border-b-[1px] border-b-[#a8a8a8]">
          <InputComponent
            placeholder="Mật khẩu"
            className={
              "w-full border-none py-[10px] text-[18px] focus:border-none focus:outline-none"
            }
            type={"password"}
            value={password}
            onChange={handleOnChangePassword}
          />
        </div>
        <div className="border-b-[1px] border-b-[#a8a8a8]">
          <InputComponent
            placeholder="Nhập lại mật khẩu"
            className={
              "w-full border-none py-[10px] text-[18px] focus:border-none focus:outline-none"
            }
            type={"password"}
            value={confirmPassword}
            onChange={handleOnChangeConfirmPassword}
          />
        </div>
        <div>
          {data?.status === "ERR" ? (
            <span className="text-red-500">{data?.message}</span>
          ) : null}
          <Spin delay={200} spinning={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length}
              textbutton="Đăng ký"
              styleButton={{ background: "#84B12E" ,margin: "10px 0px",  padding: "4px 0px"}}
              styleTextButton={{ color: "#ffffff" , fontSize: "20px" , fontWeight: "500"}}
              size={"large"}
              className={` w-full  rounded-md ${!email.length || !password.length || !confirmPassword.length ? "cursor-not-allowed bg-[#a8a8a8] text-[#ffffff]" : "bg-[#FF424E] text-white"} `}
              onClick={handleSignUp}
            />
          </Spin>
        </div>
      </div>
      <p
        className="mt-[10px] cursor-pointer text-center font-sans text-[14px] text-[#0D5CB6]"
        onClick={handleGoToSignIn}
      >
        Quay lại trang đang nhập
      </p>

      <div className="mt-20 text-center">
        <span className="mb-[15px] inline-block px-20 font-sans text-[15px]">
          Hoặc tiếp tục bằng
        </span>
        <ul className="flex items-center justify-center gap-3">
          <li className="inline-block">
            <img src={images.Fb} className="h-[58px] w-[58px]" alt="Facebook" />
          </li>
          <li className="inline-block">
            <img
              src={images.Google}
              className="h-[58px] w-[58px]"
              alt="Google"
            />
          </li>
        </ul>
        <p className="mt-[10px] font-sans text-[14px] text-[#a8a8a8]">
          Bằng việc tiếp tục, bạn đã đọc và đồng ý với điều khoản sử dụng và
          Chính sách bảo mật thông tin cá nhân của Tiki
        </p>
      </div>
    </div>
  );
};

export default SignUp;
