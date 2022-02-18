import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white my-3">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src={"/images/Logo_Primary_H.svg"}
              width={253}
              height={36}
              quality={90}
              alt="decenode logo"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text">
            <Link href="/blog">Blog</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
