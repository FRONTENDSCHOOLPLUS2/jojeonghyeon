import { useNavigate } from "react-router-dom";

function ListItem({ data }) {
  const navigate = useNavigate();
  const { _id, type, title, updatedAt, views, repliesCount, user } = data;

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">{_id}</td>
      <td
        className="p-2 truncate indent-4 cursor-pointer"
        onClick={() => navigate(`/${type}/${_id}`)}
      >
        {title}
      </td>
      <td className="p-2 text-center truncate">{user.name}</td>
      <td className="p-2 text-center hidden sm:table-cell">{views}</td>
      <td className="p-2 text-center hidden sm:table-cell">{repliesCount}</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">
        {updatedAt}
      </td>
    </tr>
  );
}

export default ListItem;
