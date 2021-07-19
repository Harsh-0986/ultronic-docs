import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        // className="hidden md:inline-flex h-20 w-20 border-0"
        className="h-20 w-10 border-0"
      >
        <Icon name="menu" size="10l" />
      </Button>
      <Icon name="description" size="4xl" color="gray" />
      <h1
        //   className="hidden md:inline-flex ml-2 text-gray-700 text-2xl"
        className="ml-2 text-gray-700 text-10l"
      >
        Documents
      </h1>

      <div className="md:mx-20 flex flex-grow items-center px-5 py-2 mx-5 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="10l" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-10 border-0"
        // className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-10 border-0"
      >
        <Icon name="apps" size="10l" color="gray" />
      </Button>

      <img
        loading="lazy"
        onClick={signOut}
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={session?.user?.image}
        // src="https://source.unsplash.com/user/erondu/1600x900"
        alt=""
      ></img>
    </header>
  );
}

export default Header;
