import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div
      style={{
        height: "100vh",
        zIndex: 999996,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="text-center not-found"
    >
      <div className="row w-100">
        <div className="col-md-6 mx-auto">
          <h1 className="display-1">404</h1>
          <h2 className="mt-3">UH OH! You're lost.</h2>
          <p className="mt-2">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Link href="/" className="btn btn-primary mt-4" style={{ color: "var(--primary)" }}>
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
