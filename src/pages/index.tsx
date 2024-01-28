import React from "react";
import Layout from "@/components/layout/Layout";
import HomeThreeBanner from "@/components/layout/banner/HomeThreeBanner";
import Agency from "@/components/containers/home-three/HomeThreeAgency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeThreeServices from "@/components/containers/home-three/HomeThreeServices";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home-three/HomeThreeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";

const Home = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <HomeThreeBanner />
      <Agency />
      <PortfolioText />
      <HomeThreeServices />
      <HomeTestimonial />
      <HomeBlog />
      <HomeSponsor />
      <NextPage />
    </Layout>
  );
};

export default Home;
