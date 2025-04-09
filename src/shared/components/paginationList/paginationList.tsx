import { useState } from "react";
import Button from "../button";
import { PaginationListProps } from "./paginationList.options";

function PaginationList<T>({
  items,
  itemComponent: ItemComponent,
  itemsInPage,
}: PaginationListProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsInPage);
  const startIndex = (currentPage - 1) * itemsInPage;
  const endIndex = startIndex + itemsInPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full flex flex-col gap-y-2">
        {currentItems.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="w-60 flex flex-row justify-between items-center mt-auto">
          <Button
            content="Назад"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="!w-20 h-10"
          />
          <div className="w-10 h-10 flex justify-center items-center text-xl">
            {currentPage}
          </div>
          <Button
            content="Вперёд"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="!w-20 h-10"
          />
        </div>
      )}
    </div>
  );
}

export default PaginationList;
