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
        <Image
          src={item.image || "/placeholder-image.jpg"} // Fallback image
          alt={item.alt || "Default Alt Text"}
          fill
          style={{
            objectFit: "cover", // Ensure the image covers the entire area
            objectPosition: "center",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="slider-content text-white">
        <div className="container d-flex">
          <div className="content-inner">
            <h6 className="sub-title">{item.title || "Default Title"}</h6>
            <h2 className="title">{item.description || "Default Description"}</h2>
            <br />
            <br />
            {item.catLink && item.catButtonTitle && (
              <Link
                className="btn radius-xl m-b50 m-r15 button-md white"
                href={item.catLink}
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
