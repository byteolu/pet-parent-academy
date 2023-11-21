
import { Button } from "./ui/button";
import Container from "./ui/container";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PawPrint } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();
  console.log(userId);

const routes = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/",
        label: "Services",
    },
    {
        href: "blog",
        label: "Blog",
    },
];
     return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Vetti </h1>
            </Link>
          </div>
   <nav className="flex justify-center mx-6 space-x-4 lg:space-x-6">
  {routes.map((route,i) => (
    <Button asChild variant="ghost" key={i}>
      <Link href={route.href} className="text-sm font-medium transition-colors">
        {route.label}
      </Link>
    </Button>
  ))}

  <div className="flex items-center ml-auto">
    {!userId ? (
      <div className="space-x-4">
        <Link href="sign-in" className="text-sm font-medium transition-colors">Sign In</Link>
        <Link href="sign-up" className="text-sm font-medium transition-colors">Sign Up</Link>
      </div>
    ) : (
      <Link href="profile" className="text-gray-300 hover:text-white mr-4">Profile</Link>
    )}

    <UserButton afterSignOutUrl="/" />
    <PawPrint className="h-6 w-6 ml-4" />
  </div>
</nav>

       </div>
      </Container>
    </header>
  );
};

export default Header;