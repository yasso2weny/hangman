// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// // import data from "../../public/data/data.json";

// const CategoryPick = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch data from public folder
//     fetch("/data/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const categoryNames = Object.keys(data.categories);
//         setCategories(categoryNames);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="categories-wrapper">
//         {categories.map((category) => (
//           <Link key={category} to="/ingame">
//             <button className="category-btn">{category}</button>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CategoryPick;
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const CategoryPick = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from public folder
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryNames = Object.keys(data.categories);
        setCategories(categoryNames);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="categories-wrapper">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/ingame/${category.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <button className="category-btn">{category}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryPick;
