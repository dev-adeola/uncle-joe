export const metadata = {
  title: "Ratefy Dashbaord Authentication",
  description: "Welcome to Ratefy Authentication page",
};

export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-full justify-center px-4 items-center overflow-hidden ">
      {children}
    </div>
  );
}
