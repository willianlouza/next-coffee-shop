import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-brown-800">
      <div className="w-full px-6 py-2 flex place-items-center">
        <div className="m-auto w-12 h-12">
          <Image className="w-full h-full object-cover" src="/images/logo.png" alt="logo" width={500} height={500} />
        </div>
      </div>
    </footer>
  );
}
