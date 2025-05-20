import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MainPagginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const MainPaggination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: MainPagginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
            className={cn(
              currentPage === 1 && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(pageNumber);
                  }}
                  isActive={pageNumber === currentPage}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (
            (pageNumber === 2 && currentPage > 3) ||
            (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
          ) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return null;
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }}
            className={cn(
              currentPage === totalPages && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
