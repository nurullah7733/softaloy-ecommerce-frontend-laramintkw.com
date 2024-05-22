import { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ total, pageNo, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageClassName="inline-block mx-1"
        pageLinkClassName="block px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"
        previousClassName="inline-block mx-1"
        previousLinkClassName="block px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"
        nextClassName="inline-block mx-1"
        nextLinkClassName="block px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"
        breakLabel="..."
        breakClassName="inline-block mx-1"
        breakLinkClassName="block px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="flex justify-center mt-4"
        activeClassName="bg-gray-200 text-white"
        pageCount={Math.ceil(total)}
        onPageChange={handlePageClick}
        forcePage={pageNo - 1}
      />
    </div>
  );
};

export default Pagination;
