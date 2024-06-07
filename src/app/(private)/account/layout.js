
import Header from "@/components/header";
import AccountMenu from "@/app/(private)/account/_components/menu";
export default function PrivateLayout({ children }) {
  return (
      <div className="w-full  mx-auto py-5  ">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="hidden md:block">
                  <AccountMenu option={'account'} />
              </div>
              <div className="space-y-8">
                  {children}
              </div>
          </div>
      </div>
  );
}
