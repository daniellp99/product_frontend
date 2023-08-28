import Icon from "./Icon";
import SideBar from "./SideBar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="sm:hidden h-8 w-8 bg-secondary"
          size="icon"
        >
          <Icon name="menu" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-secondary">
        <SideBar className="block" />
      </SheetContent>
    </Sheet>
  );
}
