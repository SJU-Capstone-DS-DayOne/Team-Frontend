import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../../apis/login";

export default function Login1() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState(true);
    const [fail, setFail] = useState(true);

    const navi = useNavigate();

    const idRef = useRef();
    const passwordRef = useRef();
    const buttonRef = useRef();

    const onChangeLoginOpacity = () => {
        if (idRef.current.value && passwordRef.current.value) {
            buttonRef.current.style.opacity = "1";
            buttonRef.current.style.pointerEvents = "auto";
            buttonRef.current.style.cursor = "pointer";
        } else {
            buttonRef.current.style.opacity = "0.7";
            buttonRef.current.style.pointerEvents = "none";
            buttonRef.current.style.cursor = "none";
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const result = await login(email, password);

        if (result) {
            navi("/");
        } else {
            setFail(false);
        }
    };

    return (
        <div
            className="flex flex-col size-[400px] px-8 pt-8 bg-white rounded-[32px]  justify-center"
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
            <div className="flex items-center justify-between">
                <div className="font-[Pretendard-Bold] text-2xl  text-[#323232] ">
                    로그인
                </div>
                {!fail && (
                    <div className="text-[#F15F5F] text-sm">
                        아이디 비밀번호가 일치하지 않습니다.
                    </div>
                )}
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
                <form
                    action="#"
                    method="POST"
                    onSubmit={onSubmit}
                    className="w-full"
                >
                    <input
                        id="id"
                        name="id"
                        type="text"
                        value={email}
                        autoComplete="email"
                        required
                        placeholder="아이디"
                        onChange={(event) => setEmail(event.target.value)}
                        onInput={onChangeLoginOpacity}
                        ref={idRef}
                        className="block pl-4 mb-4 h-12 w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                    />
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={passwordType ? "password" : "text"}
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="비밀번호"
                            onInput={onChangeLoginOpacity}
                            ref={passwordRef}
                            className="block w-full h-12 pl-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                        />
                        {!passwordType ? (
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-2 top-1 cursor-pointer text-[#c2c2c2] hover:text-[#323232]"
                                onClick={() => setPasswordType(!passwordType)}
                            >
                                <path
                                    d="M20 29C22.7614 29 25 26.7614 25 24C25 21.2386 22.7614 19 20 19C17.2386 19 15 21.2386 15 24C15 26.7614 17.2386 29 20 29Z"
                                    fill="#C1C1C1"
                                />
                                <path
                                    d="M8 19C9.14978 18.0019 10.373 17.1696 11.6443 16.5M32 19C26.3531 13.9582 18.3337 12.9765 11.6443 16.5M8.94286 12.25L11.6443 16.5M30.4787 12.25L28.4216 16.5M20 10V14.4058"
                                    stroke="#C1C1C1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-2 top-1 cursor-pointer text-[#c2c2c2] hover:text-[#323232]"
                                onClick={() => setPasswordType(!passwordType)}
                            >
                                <path
                                    d="M8 16C9.14978 16.6654 10.373 17.2203 11.6443 17.6667M32 16C26.3531 19.3612 18.3337 20.0157 11.6443 17.6667M8.94286 22.5L11.6443 17.6667M30.4787 22.5L28.4216 17.6667M20 24V19.0628"
                                    stroke="#C1C1C1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex font-[Pretendard-SemiBold] mt-4 w-full justify-center rounded-xl bg-[#6e3bff] p-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            style={{
                                opacity: "0.5",
                                pointerEvents: "none",
                            }}
                            ref={buttonRef}
                            onClick={onSubmit}
                        >
                            로그인
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-end w-full gap-1 my-4">
                    <div className="font-semibold text-[#c1c1c1] cursor-pointer">
                        아이디
                    </div>

                    <div className="text-[#c1c1c1] ">/</div>
                    <div className="font-semibold text-[#c1c1c1] cursor-pointer">
                        비밀번호 찾기
                    </div>
                </div>
                <div className="flex border-t-[1px] border-t-[#e2e2e2] w-full px-4 py-6 justify-center gap-2">
                    <div className="text-[#c1c1c1]">
                        아직 회원이 아니신가요?
                    </div>
                    <Link
                        to={"/signup"}
                        className="text-[#6e3bff] font-[Pretendard-Bold]"
                    >
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    );
}

// 소셜 로그인 연동 x 추후 카카오랑 네이버 인증 받아야함
// 비밀번호 찾기 구현 x
// 회원가입 구현 x
// 회원가입과 비밀번호 찾기는 cold start 해결 후 처리할 예정

// <VisibilityOffOutlinedIcon
//     className="absolute right-2 top-[12px] size-1 cursor-pointer text-[#c2c2c2] hover:text-[#323232]"
//     onClick={onChangeInputType}
// />;
