import Image from "next/image";
import Link from "next/link";

export default function SliderItem({ item }) {
  if (!item) return null; // Render nothing if item is missing

  return (
    <div className="slider-item">
      {/* Image Section */}
      <div
        className="ovbl-light"
        style={{ position: "relative", width: "100%", height: "640px" }}
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.alt || ""}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="slider-content text-white">
        <div className="container d-flex">
          <div className="content-inner">
            <h6 className="sub-title">{item.title || ""}</h6>
            <h2 className="title">
              {item.description || ""}
            </h2>
         
            {item.catLink && item.catButtonTitle && (
              <Link
                className="btn radius-xl m-b50 m-r15 button-md white"
                href={item.catLink}
                style={{ background: "var(--primary)", color: "white" }}
              >
                {item.catButtonTitle}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
