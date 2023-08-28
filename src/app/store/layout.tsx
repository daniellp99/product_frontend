import SideBar from "@/components/SideBar";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SideBar className="hidden lg:block fixed top-0 left-0 w-52 h-screen pt-10 border-r" />
      {children}
    </section>
  );
}
