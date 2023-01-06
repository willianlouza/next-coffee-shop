import { ShoppingCartOutlined } from "@mui/icons-material";
interface IProps {
  className?: string;
}
export default function ButtonAddCart(props: IProps) {
  const { className = "" } = props;
  return (
    <button className={`${className} bg-brown-400 hover:bg-brown-500 py-4 px-6`}>
      <span className="flex flex-nowrap gap-4">
        <ShoppingCartOutlined />
        <p>Adicionar ao carrinho</p>
      </span>
    </button>
  );
}
