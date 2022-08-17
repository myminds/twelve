export const Pagination = ({ paginationData, handlePagination}) => {
    console.log("paginationData",paginationData)
  return (
    <div className="pagination">
      <a href="#">&laquo;</a>

      {Array.from(Array(paginationData.page).keys()).map((val) => {
        val=val+1
        return <a onClick={()=>handlePagination(val)} className={+paginationData.currentPage === val?"active":""}>{val}</a>;
      })}
      <a href="#">&raquo;</a>
    </div>
  );
};
