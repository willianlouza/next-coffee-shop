interface IProps {
  text: string;
  className?: string;
}
export default function ButtonPrimary(props: IProps) {
  return (
    <button
      className={`${props.className} bg-brown-400 py-4 px-6 hover:bg-brown-500 transition-colors duration-150 ease-in`}
    >
      {props.text}
    </button>
  );
}
