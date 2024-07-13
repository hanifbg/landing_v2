import Navbar from "../Navbar";
import Footer from "../Footer";

const AppShell = (props) => {
  const { children } = props;

  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
