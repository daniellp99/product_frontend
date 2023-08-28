import { DropdownUser } from "./DropdownUser";
import MobileSideBar from "./MobileSideBar";
import { ThemeToggle } from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-secondary border-b border-secondary-foreground">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <MobileSideBar />
            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Store
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DropdownUser />
          </div>
        </div>
      </div>
    </nav>
  );
}
