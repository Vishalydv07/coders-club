import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#121212', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img   src='data:image/png;base64,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'  alt="logo" height={60} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;