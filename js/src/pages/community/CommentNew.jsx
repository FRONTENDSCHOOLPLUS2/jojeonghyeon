import Submit from "@components/Submit";
import useUserStore from "@zustand/store";
import { useState } from "react";

function CommentNew() {
  const [comment, setComment] = useState("");
  const { isLoggedIn } = useUserStore((userInfo) => userInfo);

  const checkTextarea = () => {
    if (!comment) {
      alert("텍스트를 입력해주세요.");
    } else {
      // 댓글 등록 api
      // 완료되면 알림
      alert("댓글이 등록되었습니다.");
      // 리패치
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!isLoggedIn) {
            alert("로그인 해주세요.");
          } else {
            checkTextarea();
          }
        }}
      >
        <div className="mb-4">
          <textarea
            rows="3"
            cols="40"
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            value={comment}
            name="comment"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          {/* 에러 메세지 출력 */}
          {/*
            <p className="ml-2 mt-1 text-sm text-red-500">
              에러 메세지
            </p>
          */}
        </div>
        <Submit size="sm">댓글 등록</Submit>
      </form>
    </div>
  );
}

export default CommentNew;
