import LeftSidebar from "@/components/AllBook/LeftSidebar";
import { getBooks } from "@/lib/data";
import BookCard from "@/ui/BookCard";

const AllBooksPage = async ({ searchParams }) => {
    const Books = await getBooks();
    const params = await searchParams
    const category = params.category

    const filteredBooks = category
        ? Books.filter(
            (book) =>
                book.category.toLowerCase() === category.toLowerCase()
        )
        : Books;

    return (
        <div className='w-[90%] sm:container mx-auto my-8 mb-30'>
            <div className='grid grid-cols-3 md:grid-cols-12 gap-5'>
                <div className='col-span-1 md:col-span-3'>
                    <LeftSidebar />
                </div>

                <div className='col-span-2 md:col-span-9'>
                    <h2 className='font-bold  mb-6 text-[16px] sm:text-xl'>
                        {category || "All Books"}
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        {
                            filteredBooks.length > 0 ? (
                                filteredBooks.map((book) => (
                                    <BookCard key={book.id} book={book} />
                                ))
                            ) : (
                                <p>No books found 😢</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;