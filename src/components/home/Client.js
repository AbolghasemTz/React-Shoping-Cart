import client from "../../assets/images/client.webp";

const Client = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${client})`,
        height: "400px",
      }}
      className="flex justify-center items-center"
    >
      <div className="max-w-screen-md mx-auto px-8 text-center md:px-0 ">
        <div className="pb-6">
          <p className="text-xs text-green-700 pb-3">FROM HAPPY CUSTOMERS</p>
          <h3 className="text-green-700 text-xl font-bold tracking-widest">
            What Client Say
          </h3>
        </div>
        <div className="pb-6">
          <h5 className="text-[12px] text-orange-400 font-bold">Vinova 1</h5>
          <span className="text-[12px] text-orange-400 font-bold">
            Street City
          </span>
        </div>
        <div>
          <p className="md:text-base text-sm text-gray-500 md:leading-9 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            augue mi, interdum ut purus id, blandit suscipit mauris. Sed tortor
            lorem, eleifend non urna non, congue bibendum libero. Duis sodales
            pellentesque sagittis. Fusce venenatis sagittis pellentesque. Nunc
            eu eros in ipsum semper condimentum in a risus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
