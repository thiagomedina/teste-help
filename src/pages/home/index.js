import PageHeader from "../../components/PageHeader";

import { teste } from "./style.module.scss";
const Home = () => {
  return (
    <>
      <PageHeader />
      <h1 className={teste}>Home</h1>
    </>
  );
};
export default Home;
