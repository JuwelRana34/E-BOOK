import Button from "../Components/Button";

export default function Home() {
  const handleClick = ():void => {
    alert("Hello, Guru!");
    console.log("Hello, Guru!");
  }
  return (
    <div className=" mt-20">
     
      <div className="bg-blue-100 text-blue-500 rounded-md p-2 capitalize font-semibold my-5 mx-auto shadow-blue-200 shadow-lg relative w-60 h-60">
        <span className=" absolute inset-0 flex items-center justify-center bg-amber-100">
          <Button text="Know me" btnAction={handleClick} />
        </span>
      </div>
    </div>
  );
}
