import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Result from "../components/Result";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <Result results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(
    (res) => res.json()
  );
  return {
    props: {
      results: request.results,
    },
  };
}
