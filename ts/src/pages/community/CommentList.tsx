import { CommentType } from "types/types";
import CommentItem from "./CommentItem";
import CommentNew from "./CommentNew";

function CommentList({ data }: CommentType) {
  const commentItems = data?.map((item) => {
    return <CommentItem key={item._id} data={item} />;
  });
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {data?.length || 0}개</h4>

      {/* 댓글 */}
      {commentItems}

      {/* 댓글 입력 */}
      <CommentNew />
    </section>
  );
}

export default CommentList;
