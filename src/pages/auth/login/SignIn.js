import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputComponent from "../../../components/InputComponent/InputComponent";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import { images } from "../../../utils/index";
import * as UserService from "../../../service/UserService";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import * as message from "../../../components/MessageComponent/Message";
import { updateUser } from "../../../redux/slides/userSlide";

import { Spin } from "antd";

export const SignIn = ({ handleSignInClick, setModalVisible }) => {
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isPending , isSuccess} = mutation;

//   useEffect(() => {
//     if (isSuccess) {
//       if(location?.state) {
//         navigate(location?.state)
//       }else {
//         navigate('/')
//       }
//       localStorage.setItem('access_token', JSON.stringify(data?.access_token))
//       localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
//       if (data?.access_token) {
//         const decoded = jwtDecode(data?.access_token)
//         if (decoded?.id) {
//           handleGetDetailsUser(decoded?.id, data?.access_token)
//         }
//       }
//     }
//   }, [isSuccess])


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    mutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          if (data?.status === "ERR") {
            message.error("Login failed");
          } else {
            message.success("Login successfully");
            navigate("/");  
            setModalVisible(false);
          }
        },
        onError: () => {
          message.error("Login failed");
        },
      },
    );
  };

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  };

  const handleGoToSignUp = () => {
    handleSignInClick();
  };

  return (
    <div className=" w-[500px] flex-col p-[40px]">
      <div className="mb-5">
        <h4 className="font-sans text-[24px] text-[#000000]">Xin Chào,</h4>
        <p>Đăng nhập hoặc Tạo tài khoản</p>
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
        <div>
          {data?.status === "ERR" ? (
            <span className="text-red-500">{data?.message}</span>
          ) : null}
          <Spin delay={200} spinning={isPending}> 
            <ButtonComponent
              disabled={!email.length || !password.length}
              textbutton="Đăng nhập"
              styleButton={{ background: "#84B12E" ,margin: "10px 0px",  padding: "4px 0px"}}
              styleTextButton={{ color: "#ffffff" , fontSize: "20px" , fontWeight: "500"}}
              size={"large"}
              className={`w-full rounded-md ${!email.length || !password.length ? "cursor-not-allowed bg-[#a8a8a8] text-[#ffffff]" : "bg-[#FF424E] text-white"} `}
              onClick={handleSignIn}
            />
          </Spin>
        </div>
      </div>
      <p
        className="mt-[10px] cursor-pointer text-center font-sans text-[14px] text-[#0D5CB6]"
        onClick={handleGoToSignUp}
      >
        Đăng ký tài khoản mới
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

export default SignIn;
