import Carousel from "../components/home/Carousel";
import Client from "../components/home/Client";
import Menu from "../components/home/Menu";
import Category from "../components/home/Category";
import Quality from "../components/home/Quality";
import OurProducts from "../components/products/OurProduct/OurProducts";

const HomePage = () => {
  return (
    <main>
      <Carousel />
      {/* section quality */}
      <section>
        <Quality />
      </section>

      {/* category */}
      <section>
        <Category />
      </section>

      {/* our Products */}
      <section>
        <OurProducts />
      </section>

      {/* Menu */}
      <section>
        <Menu />
      </section>
      {/* client */}
      <section>
        <Client />
      </section>
    </main>
  );
};

export default HomePage;
