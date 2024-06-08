import { useRef, useState } from "react";
import { join } from "../../apis/join";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [booleanGender, setBooleanGender] = useState(true);

    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const nicknameRef = useRef(null);
    const phontRef = useRef(null);
    const birthRef = useRef(null);
    const buttonRef = useRef(null);

    const navigate = useNavigate();

    const onJoin = async () => {
        const gender = booleanGender ? "MALE" : "FEMALE";
        const result = await join(
            email,
            password,
            nickname,
            gender,
            phone,
            birth
        );
        if (result) {
            navigate("/");
        }
    };
    const onChangeSignupOpacity = () => {
        if (
            idRef.current.value &&
            passwordRef.current.value &&
            nicknameRef.current.value &&
            phontRef.current.value &&
            birthRef.current.value
        ) {
            buttonRef.current.style.opacity = "1";
            buttonRef.current.style.pointerEvents = "auto";
            buttonRef.current.style.cursor = "pointer";
        } else {
            buttonRef.current.style.opacity = "0.7";
            buttonRef.current.style.pointerEvents = "none";
            buttonRef.current.style.cursor = "none";
        }
    };

    return (
        <div
            className="flex flex-col  px-8 pt-8 bg-white rounded-[32px]  justify-center"
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
            <div className="font-[Pretendard-Bold] text-2xl  text-[#323232] ">
                회원가입
            </div>

            <form className="flex flex-col justify-center w-[300px] mt-4">
                <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    ref={idRef}
                    onInput={onChangeSignupOpacity}
                    placeholder="아이디"
                    onChange={(event) => setEmail(event.target.value)}
                    className="block pl-4 mb-4 h-12 w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                />

                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    ref={passwordRef}
                    onInput={onChangeSignupOpacity}
                    placeholder="비밀번호"
                    className="block pl-4 mb-4 h-12 w-full rounded-xl border-0 py-1 text-[#6E3BFF] shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <input
                    id="nickname"
                    name="nickname"
                    required
                    ref={nicknameRef}
                    onInput={onChangeSignupOpacity}
                    placeholder="사용자 이름"
                    className="block pl-4 mb-4 h-12 w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                    onChange={(event) => setNickname(event.target.value)}
                />

                <input
                    id="phone"
                    name="phone"
                    required
                    ref={phontRef}
                    onInput={onChangeSignupOpacity}
                    placeholder="휴대폰 번호"
                    className="block pl-4 mb-4 h-12 w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                    onChange={(event) => setPhone(event.target.value)}
                />

                <input
                    id="birth"
                    name="birth"
                    required
                    ref={birthRef}
                    onInput={onChangeSignupOpacity}
                    placeholder="생년월일 (YYYY.MM.DD)"
                    className="block pl-4 mb-4 h-12 w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#e2e2e2] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none sm:text-sm sm:leading-6"
                    onChange={(event) => setBirth(event.target.value)}
                />

                <div className="flex w-full h-12 gap-2">
                    <div
                        className="flex items-center justify-center flex-1 gap-2 border-[1px]  cursor-pointer rounded-xl"
                        style={{
                            borderColor: booleanGender ? "#6E3BFF" : "#e2e2e2",
                        }}
                        onClick={() => setBooleanGender(true)}
                    >
                        <div
                            className="font-[Pretendard-SemiBold]"
                            style={{
                                color: booleanGender ? "#6E3BFF" : "#606060",
                            }}
                        >
                            남자
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center flex-1 gap-2 border-[1px]  cursor-pointer rounded-xl"
                        style={{
                            borderColor: !booleanGender ? "#6E3BFF" : "#e2e2e2",
                        }}
                        onClick={() => setBooleanGender(false)}
                    >
                        <div
                            className="font-[Pretendard-SemiBold]"
                            style={{
                                color: !booleanGender ? "#6E3BFF" : "#606060",
                            }}
                        >
                            여자
                        </div>
                    </div>
                </div>
            </form>
            <button
                className="flex font-[Pretendard-SemiBold] my-8 w-full justify-center rounded-xl bg-[#6e3bff] p-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={onJoin}
                style={{
                    opacity: "0.7",
                    pointerEvents: "none",
                }}
                ref={buttonRef}
            >
                가입하기
            </button>
        </div>
    );
}
