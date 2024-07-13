import { useNavigate, useParams } from "react-router-dom";
import Button from "@components/Button";
import CommentList from "./CommentList";
import useFetch from "@hooks/useFetch";

function Detail() {
  const navigate = useNavigate();
  const contentId = useParams()._id;
  const { data } = useFetch("/posts/" + contentId);

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <div className="font-semibold text-xl">제목 : {data?.item.title}</div>
        <div className="text-right text-gray-400">
          작성자 : {data?.item.user.name}
        </div>
        <div className="mb-4">
          <div>
            <pre className="font-roboto w-full p-2 whitespace-pre-wrap"></pre>
          </div>
          {data?.item.content}
          {/* <hr /> */}
        </div>
        <div className="flex justify-end my-4">
          <Button onClick={() => history.back()}>목록</Button>
          <Button color="gray" onClick={() => navigate("/info/1/edit")}>
            수정
          </Button>
          <Button color="red" onClick={() => navigate("/info")}>
            삭제
          </Button>
        </div>
      </section>

      {/* 댓글 목록 */}
      <CommentList data={data?.item.replies} />
    </main>
  );
}

export default Detail;
