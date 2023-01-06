import Link from "next/link";

interface IProps {
  href: string;
  text: string;
}
export default function NavLink(props: IProps) {
  return (
    <li className="group hover:text-brown-500">
      <Link href={props.href}>{props.text}</Link>
      <div className="place-content-center block w-full h-0.5 overflow-hidden">
        <div className="group-hover:w-full transition-all duration-150 ease-in m-auto w-0 h-0.5 bg-brown-500"></div>
      </div>
    </li>
  );
}
