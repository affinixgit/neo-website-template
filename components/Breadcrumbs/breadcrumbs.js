import Link from "next/link";
import Head from "next/head";

export default function Breadcrumbs({ breadcrumbs }) {
  // Generate JSON-LD schema for breadcrumbs 

  return (
    <>
      {/* Render JSON-LD for Breadcrumbs */}
    
      {/* Breadcrumb HTML */}
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            {breadcrumbs.map((breadcrumb, index) => (
              <li className="list-inline-item" key={index}>
                {breadcrumb.url ? (
                  <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
                ) : (
                  breadcrumb.name
                )}
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
