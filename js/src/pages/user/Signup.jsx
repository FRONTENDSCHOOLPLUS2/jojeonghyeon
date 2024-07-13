import Button from "@components/Button";
import Submit from "@components/Submit";
import useMutation from "@hooks/useMutation";
import { useState } from "react";

function Signup() {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [profilePicVal, setProfilePicVal] = useState("");
  const { send } = useMutation("/users/", {
    method: "POST",
  });

  const handleSignup = async () => {
    try {
      await send({
        body: JSON.stringify({
          email: emailVal,
          password: passwordVal,
          name: nameVal,
          profileImage: profilePicVal || "/files/00-sample/RE6YHQ0cm.png",
          type: "user",
        }),
      });
      history.back();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="min-w-80 p-10 flex-grow flex items-center justify-center">
      <div className="p-8  border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            회원 가입
          </h2>
        </div>

        <form
          onSubmit={(event) => {
            if (nameVal && emailVal && passwordVal) {
              event.preventDefault();
              handleSignup();
              history.back();
            } else {
              event.preventDefault();
              if (!nameVal) {
                alert("이름을 입력해주세요.");
              } else if (!emailVal) {
                alert("이메일을 입력해주세요.");
              } else if (!passwordVal) {
                alert("비밀번호를 입력해주세요.");
              }
            }
          }}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="name"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
              name="name"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              name="email"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              value={passwordVal}
              onChange={(e) => setPasswordVal(e.target.value)}
              name="password"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="profileImage"
            >
              프로필 이미지(선택)
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              value={profilePicVal}
              onChange={(e) => setProfilePicVal(e.target.value)}
              name="profileImage"
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <Submit>회원가입</Submit>
            <Button type="reset" color="gray" onClick={() => history.back()}>
              취소
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
