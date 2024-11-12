import Link from 'next/link';


const Pagination = ({ currentPage, totalPages }) => {
    return (
        <nav className="pagination">
            <ul>
                {currentPage > 1 && (
                    <li>
                        <Link className="pageLink" href={`/blogs/page/${currentPage - 1}`}>
                            Prev
                        </Link>
                    </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1}>
                        <Link  className={
                                    i + 1 === currentPage
                                        ? `pageLink active`
                                        : `pageLink`
                                } href={`/blogs/page/${i + 1}`}>
                           
                                {i + 1}
                          
                        </Link>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li>
                        <Link  className="pageLink" href={`/blogs/page/${currentPage + 1}`}>
                           Next
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
