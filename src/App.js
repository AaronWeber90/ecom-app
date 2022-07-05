import Directory from "./components/directory/directory.component";

const App = () => {

  const getRndImage = () => {
    const rndNum = Math.floor(Math.random() * 200) + 200
    return`Https://source.unsplash.com/random/${rndNum}x${rndNum}`
  }

  const categories = [
    {
      id: 1,
      title: "Hats",
      imgUrl: getRndImage(),
    },
    {
      id: 2,
      title: "Shoes",
      imgUrl: getRndImage(),
    },
    {
      id: 3,
      title: "Jackets",
      imgUrl: getRndImage(),
    },
    {
      id: 4,
      title: "Trousers",
      imgUrl: getRndImage(),
    },
    {
      id: 5,
      title: "Socks",
      imgUrl: getRndImage(),
    },
  ];


  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
