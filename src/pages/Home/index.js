import FormToAddProduct from "../../components/FormToAddProduct";
import "./styles.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <FormToAddProduct />

        <main>
          <h1>lista produtos</h1>
        </main>
      </div>
    </>
  );
};
export default Home;
