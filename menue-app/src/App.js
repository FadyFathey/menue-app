import { Container } from "react-bootstrap";
import Navbars from "./components/Navbars";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { useState } from "react";

function App() {
  const items = [
    {
      id: Math.random(),
      title: "وجبه فطار",
      description: "وصف الفطار",
      price: "100 جنيه",
      category: "فطار",
      imgUrl: "1.png",
    },
    {
      id: Math.random(),
      title: "وجبه غدا",
      description: "وصف الفطار",
      price: "80 جنيه",
      category: "غدا",
      imgUrl: "2.png",
    },
    {
      id: Math.random(),
      title: "وجبه عشاء",
      description: "وصف الفطار",
      price: "40 جنيه",
      category: "عشاء",
      imgUrl: "3.png",
    },
    {
      id: Math.random(),
      title: "وجبه غدا ممتاز",
      description: "وصف الفطار",
      price: "30 جنيه",
      category: "غدا",
      imgUrl: "2.png",
    },
    {
      id: Math.random(),
      title: "وجبه عشاء درجه اولى",
      description: "وصف الفطار",
      price: "50 جنيه",
      category: "عشاء",
      imgUrl: "1.png",
    },
    {
      id: Math.random(),
      title: "وجبه فطار",
      description: "وصف الفطار",
      price: "50 جنيه",
      category: "فطار",
      imgUrl: "3.png",
    },
    {
      id: Math.random(),
      title: "وجبه سناك",
      description: "وصف الفطار",
      price: "50 جنيه",
      category: "سناك",
      imgUrl: "3.png",
    },
  ];

  const [itemsDate, setitemsDate] = useState(items);
  const filterByCategory = (cat) => {
    const newArray = items.filter((item) => item.category === cat);
    if (cat === "الكل") {
      return setitemsDate(items);
    }
    setitemsDate(newArray);
  };
  // get all categories
  const allCategory = ["الكل", ...new Set(items.map((el) => el.category))];

  //filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArray = items.filter((item) => item.title === word);
      return setitemsDate(newArray);
    }
  };
  return (
    <div className="color-body font">
      <Navbars filterBySearch={filterBySearch}></Navbars>

      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemsList itemsDate={itemsDate} />
      </Container>
    </div>
  );
}

export default App;
