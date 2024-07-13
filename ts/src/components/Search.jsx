import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Search() {
  const navigate = useNavigate();

  return (
    <form onSubmit={() => navigate("")}>
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
      />
      <Button>검색</Button>
      <Button>글작성</Button>
    </form>
  );
}

export default Search;
