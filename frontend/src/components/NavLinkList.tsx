import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavLinkList = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-4" : "hover:text-stone-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "border-b-4" : "hover:text-stone-500"
        }
      >
        About
      </NavLink>
      <div className="flex md:flex-row gap-4 flex-col items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our works</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] flex flex-col gap-3 text-lg ">
                  <NavLink
                    to="/ourworks/thematic-areas"
                    className="hover:bg-stone-100 p-2"
                  >
                    Thematic Areas
                  </NavLink>
                  <NavLink
                    to="/ourworks/accomplishment"
                    className="hover:bg-stone-100 p-2"
                  >
                    Our Accomplishments
                  </NavLink>
                  <NavLink
                    to="/ourworks/blogs"
                    className="hover:bg-stone-100 p-2"
                  >
                    Blogs
                  </NavLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Research</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] flex flex-col gap-3 ">
                  <NavLink
                    to="/research/ongoing-projects"
                    className="hover:bg-stone-100 p-2"
                  >
                    Ongoing projects
                  </NavLink>

                  <NavLink
                    to="/research/collaboration"
                    className="hover:bg-stone-100 p-2"
                  >
                    Collaboration
                  </NavLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Media</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] flex flex-col gap-3 ">
                  <NavLink
                    to="/media/photo-gallery"
                    className="hover:bg-stone-100 p-2"
                  >
                    Photo gallery
                  </NavLink>
                  <NavLink
                    to="/media/videos"
                    className="hover:bg-stone-100 p-2"
                  >
                    Videos
                  </NavLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "border-b-4" : "hover:text-stone-500"
        }
      >
        Contact us
      </NavLink>
      <NavLink to="/donate">
        <Button className="bg-blue-950 hover:bg-blue-500 cursor-pointer duration-300 ease-in">
          Donate
        </Button>
      </NavLink>
    </>
  );
};

export default NavLinkList;
