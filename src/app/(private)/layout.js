
import Header from "@/components/header";
export default function PrivateLayout({ children }) {
  return (
      <div className="container mx-auto px-9">
          <div className="container-fluid9">
              <Header />
              {children}
          </div>
      </div>
  );
}
