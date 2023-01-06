import ButtonPrimary from "../buttons/button-primary";
export default function Map() {
  return (
    <div className="flex flex-col gap-10 place-items-center place-content-center">
      <div className="max-w-7xl container flex flex-col place-items-center">
        <div className="bg-brown-800 py-6 px-12 lg:py-12 lg:px-32">
          <div className="flex flex-col place-items-center place-content-center gap-6">
            <div className="text-center">
              <span className="text-brown-500">Reserva</span>
              <h1 className="font-title text-4xl">Garanta uma mesa</h1>
            </div>
            <form action="#" className="flex flex-col gap-4 w-full">
              <input className="bg-black/25 p-4" type="text" placeholder="4 Pessoas" name="" id="" />
              <input className="bg-black/25 p-4" type="text" placeholder="25/01/2023" name="" id="" />
              <input className="bg-black/25 p-4" type="text" placeholder="10:30 AM" name="" id="" />
              <ButtonPrimary text="Reservar Mesa" className="w-48 mt-6 m-auto" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
