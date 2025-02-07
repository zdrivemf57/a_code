import { useAtom } from "jotai";
import { itemPageAtom } from "../../atoms/itemPageAtom";
import { Pagination } from "react-bootstrap";

// 1からトータルのページ数までの配列を生成する関数
function createPageArray(totalPages) {
  return [...Array(totalPages).keys()].map((p) => ++p);
}

export default function ItemPagination() {
  const [{ currentPage, totalPages }, setItemPage] = useAtom(itemPageAtom);

  const changePage = (page) => {
    setItemPage((prev) => ({ ...prev, currentPage: page }));
  };

  if (totalPages < 2) return <></>;

  const pages = createPageArray(totalPages);

  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          onClick={() => changePage(page)}
          key={page}
          active={page === currentPage}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}
