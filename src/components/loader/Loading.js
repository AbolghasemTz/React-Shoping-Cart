import spinner from "../../assets/images/spinner.svg";
const Loading = () => {
  return (
    <div className=" w-[500px] md:w-[900px] flex justify-center items-center">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;
