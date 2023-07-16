import { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const Application: FC = () => {
  const home = <Home />;
  const about = <About />;

  return (
    <div>
      <nav>
        <Link data-testid="link-home" to={`${process.env.PUBLIC_URL}/`}>
          Home
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
      </nav>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/about`} element={about} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={home} />
      </Routes>
    </div>
  );
};
