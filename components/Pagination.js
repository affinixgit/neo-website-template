// /components/Pagination.tsx
import Link from 'next/link';



const Pagination = ({ currentPage, totalPages }) => {
    return (
        <nav>
            <ul>
                {currentPage > 1 && (
                    <li>
                        <Link href={`/blog/${currentPage - 1}`}>Prev</Link>
                    </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1}>
                        <Link href={`/blog/${i + 1}`}>{i + 1}</Link>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li>
                        <Link href={`/blog/${currentPage + 1}`}>Next</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;