import { useState, useEffect } from "react";

import ProfileParagraph from "../components/TopOfPage/ProfileParagraph";
import TopPage from "../components/TopOfPage/TopPage";
import CardShop from "../components/TopOfPage/CartShop";
import SearchBox from "../components/TopOfPage/SearchBox";
import NavMenu from "../components/NavBar/NavMenu";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main";
import SectionAd from "../components/SectionBaner/SectionAd";
import InfoSection from "../components/InfoSection/InfoSection";
import NewsSection from "../components/NewsSection/NewsSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <TopPage>
        <ProfileParagraph />
        <CardShop />
        <SearchBox />
      </TopPage>
      <NavMenu />
      <Header />
      <Banner />
      <Main />
      <SectionAd />
      <InfoSection />
      <NewsSection />
      <FeaturedSection />
      <Footer />
    </>
  );
}

export default HomePage;
