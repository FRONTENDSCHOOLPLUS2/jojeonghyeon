import useFetch from "@hooks/useFetch";
import Pagination from "@components/Pagination";
import ListItem from "./ListItem";
import Search from "@components/Search";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function List() {
  // 페이지 파라미터를 가져와서 fetch url에 전달
  const pathId = useParams().type;
  const pageTitle = {
    info: "정보공유",
    free: "자유게시판",
    qna: "질문게시판",
  };

  const { data, loading, error, refetch } = useFetch("/posts?type=" + pathId);
  const listData = data?.item.map((item) => {
    return <ListItem key={item._id} data={item} />;
  });
  const pagination = <Pagination data={data?.pagination} />;

  useEffect(() => {
    refetch();
  }, [pathId]);

  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
          {pageTitle[pathId]}
        </h2>
      </div>
      <div className="flex justify-end mr-4">
        {/* 검색 */}
        <Search />
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                조회수
              </th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                댓글수
              </th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 로딩 상태 표시 */}
            {loading && (
              <tr>
                <td colSpan="6" className="py-20 text-center">
                  로딩중...
                </td>
              </tr>
            )}
            {/* 에러 메세지 출력 */}
            {error && (
              <tr>
                <td colSpan="6" className="py-20 text-center">
                  {error}
                </td>
              </tr>
            )}

            {/* 본문 출력 */}
            {data && listData}
          </tbody>
        </table>
        <hr />

        {/* 페이지네이션 */}
        {data && pagination}
      </section>
    </main>
  );
}

export default List;
