import MovingButton from "./components/movingButton";
function App() {
  const links = [
    "https://i.pinimg.com/1200x/7d/3c/d6/7d3cd65da2182b47531a82c7391c97c0.jpg",
    "https://www.youtube.com/watch?v=BQduwygpHRU",
    "https://www.youtube.com/watch?v=7FwhsYjeUFc&pp=ygUMdmljdG9yeSBtZW1l",
    "https://youtu.be/AZgtQgubOus",
    "https://www.youtube.com/watch?v=ymdhRMiMGK0",
    "https://www.youtube.com/watch?v=Kyl01V1EWC8",
    "https://www.youtube.com/watch?v=ym_elQESArI",
    "https://youtu.be/XYu__CE4u-M",
    "https://youtu.be/rew8ZFfoHks",
    "https://youtu.be/FenNwYo-miw?t=15",
    "https://youtu.be/5uAVvo9ZU9Y"
  ];

  const getRandomLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.location.href = randomLink;
  };

  return (
    <>
      <h1>Hoje Tem?</h1>
      <div className="container">
          <button onClick={() => getRandomLink()} className="yes">Sim</button>
        <MovingButton />
      </div>
    </>
  );
}

export default App;
