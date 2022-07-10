import { NavLink } from "solid-app-router";
import type { Component } from "solid-js";

const Nav: Component = () => {
  return (
    <nav>
      <NavLink
        href="/"
        class="px-4 py-2 rounded mr-1 bg-blue-500 text-white hover:bg-blue-800"
        end
        activeClass="bg-emerald-500"
      >
        Home
      </NavLink>
      <NavLink
        href="/saved-repos"
        class="px-4 py-2 rounded mr-1 bg-blue-500 text-white hover:bg-blue-800"
        activeClass="bg-emerald-500 hover:bg-emerald-800"
      >
        Saved Repos
      </NavLink>
    </nav>
  );
};

export default Nav;
