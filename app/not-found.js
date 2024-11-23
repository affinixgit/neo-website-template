import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div
      style={{
        height: "110vh",
        zIndex: 999996,
        position: "absolute",
        top: -25,
        left: 0,
        width: "100%",
        background: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center mt-4 not-found"
    >
      {/* <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl mt-2">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          style={{ background: "var(--primary)" }}
          className="btn btn-primary mt-4 mb-4"
        >
          Go Back to Home
        </Link> */}
      <div className="row">
        <div className="col-md-6 align-self-center">
          <img src="/astro.gif" alt="404" />
        </div>

        <div className="col-md-6 align-self-center">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Link href="/" className="btn green">
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
