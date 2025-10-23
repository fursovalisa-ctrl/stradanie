import Button from "../Button";
import s from "../style.module.css";
import { useState, useRef, useEffect } from "react";

const Items = [
  {
    title: "TITLE1",
    title2: "DESCRIPTION1",
    key: 1,
    isActive: false,
  },
  {
    title: "TITLE2",
    title2: "DESCRIPTION2",
    key: 2,
    isActive: false,
  },
  {
    title: "TITLe3",
    title2: "DESCRIPTION3",
    key: 3,
    isActive: false,
  },
];

//  export default function Collapse() {
//     const [ActiveKey, setActiveKey] = useState(0);

//     const handleClick = (key) => (event) => {
//       setActiveKey(key);
//     };

//     useEffect(() => {
//       const newItems = Items.map((Item) => ({
//         ...Items,
//         isActive:
//           Item.key === ActiveKey
//             ? (Item.isActive = true)
//             : (Item.isActive = false),
//       }));
//     }, [ActiveKey]);

//     return (
//       <>
//         {Items.map((Item) => (
//           <div>
//             <Button onClick={handleClick(Item.key)}>Раскрывающийся список</Button>
//             {isActive && (
//               <div className={s.CollapseItemTrue}>
//                 <p>{Item.title2}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </>
//     );
//   }
export default function Collapse() {
  const [activeKey, setActiveKey] = useState(0);
  const [items, setItems] = useState(Items); // добавляем состояние для items

  const handleClick = (key) => (event) => {
    setActiveKey(key);
  };

  useEffect(() => {
    // Обновляем items при изменении activeKey
    const newItems = Items.map((item) => ({
      ...item, // распространяем текущий элемент, а не весь массив
      isActive: item.key === activeKey, // упрощённая логика
    }));
    setItems(newItems); // сохраняем в состояние
  }, [activeKey]);

  return (
    <>
      {items.map((item) => (
        <div key={item.key}>
          {" "}
          {/* добавляем key */}
          <Button onClick={handleClick(item.key)}>Раскрывающийся список</Button>
          {item.isActive && (
            <div className={s.CollapseItemTrue}>
              <p>{item.title2}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
