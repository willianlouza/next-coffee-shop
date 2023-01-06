import Footer from "./footer";
import Navbar from "./navbar";

interface IProps {
  children?: React.ReactNode;
}
export default function Layout(props: IProps) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
