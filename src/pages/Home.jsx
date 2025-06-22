import React, { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import { Productcard } from "../components/productCard/Productcard";
import style from "./Home.module.css";
import { Multifilter } from "../components/MultiFilter/MultiFilter";
import { Dropdown } from "../components/DropDown/Dropdown";
import { filteroptions } from "../configs/filteroptions";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

const heroDetail = {
  title: "DISCOVER OUR PRODUCTS",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
};

const Home = () => {
  const [isFilterClosed, setFilterClosed] = useState(false);
  return (
    <div>
      <Helmet>
        <title>Best E-commerce Store | Buy Products Online</title>
        <meta
          name="description"
          content="Shop the best products online at affordable prices. Free shipping available."
        />
          <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Wireless Headphones",
        "description": "Premium noise-canceling wireless headphones."
      }
    `}
  </script>
      </Helmet>
      <Header />
      <Hero details={heroDetail} />
      <section className={style.container}>
        <header className={style.header}>
          <section className={style.filtertoggle}>
            <h4 className={style.filtertoggle_title}>3214 items</h4>
            <button
              className={style.filterbutton}
              onClick={() => setFilterClosed(!isFilterClosed)}
            >
              {isFilterClosed ? "hide filter" : "show filter"}
            </button>
          </section>

          <h4>
            <Dropdown options={filteroptions} />
          </h4>
        </header>
        <section className={style.filters}>
          {/* multi Filter Section */}
          {isFilterClosed && <Multifilter />}
          {/* product list */}
          <main
            className={
              isFilterClosed ? style.products_grid_filter : style.products_grid
            }
          >
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </main>
        </section>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
