import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/collapse/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import React, { useState, useEffect } from "react";
import EffectSection from "./components/EffectSection";

// Наш помощник useApi
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Сервер не отвечает");
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

const API_URL = "http://localhost:9000";

// export default function App() {
//   const { data: chastushki, loading, error } = useApi(API_URL + "/chastushki");

//   if (loading) return <div>📝 Загружаем посты...</div>;
//   if (error) return <div>😞 Ошибка: {error}</div>;

//   return (
//     <div>
//       <h1>Блог</h1>
//       {chastushki.map((chastushka) => (
//         <article key={chastushka.id}>
//           <h2>{chastushka.text}</h2>
//           <span>{chastushka.category}</span>
//           <p>{chastushka.author}</p>
//         </article>
//       ))}
//     </div>
//   );
// }

// interface User {
//         id: number;
//         name: string;
//         age: number;
//         email: string;
//     }

export default function UserList() {
  const { data: users, error, loading } = useApi("http://localhost:9000/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.massage}</div>;
  if (!users) return <div>No data</div>;

  return (
    <div>
      {users.map((user) => (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
