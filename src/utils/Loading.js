import spinner from "../assets/images/spinner.svg";
const Loading = () => {
  return (
    <div className=" w-[400px] md:w-[900px] flex justify-center items-center">
      <img src={spinner} alt="loading" className="w-32" />
    </div>
  );
};

export default Loading;
