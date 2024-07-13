import { Link } from "react-router-dom";
import Button from "@components/Button";

function CommentItem({ data }) {
  const { user, content, createdAt } = data;

  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
          alt="무지 프로필 이미지"
        />
        <Link to="" className="text-orange-400">
          {user.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.07 12:34:56">
          {createdAt}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <pre className="whitespace-pre-wrap text-sm">{content}</pre>
        <Button color="red">삭제</Button>
      </div>
    </div>
  );
}

export default CommentItem;
