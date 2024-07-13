import { Link } from "react-router-dom";

function Pagination({ data }) {
  const { page, totalPages } = data;

  return (
    <div>
      <ul className="flex justify-center gap-3 m-4">
        {Array.from({ length: totalPages }, (_, index) => {
          return (
            <li
              key={index}
              className={`${
                page === index + 1 ? "text-bold text-blue-700" : ""
              }`}
            >
              <Link to={`/info?page=${index}`}>{index + 1}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
