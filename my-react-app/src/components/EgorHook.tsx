import { useState } from "react";
import { useEgor } from "./useEgor";
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

export function EgorHook() {
  const { data, error, isLoading } = useEgor(URL);
  const [searchId, setSearchId] = useState<string>("");
  if (isLoading) return "Загрузка...";
  if (error) return "Ошибка загрузки";

  const filterEgor = data.filter((item) =>
    item.id.toString().includes(searchId)
  );

  return (
    <>
      <input
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Введите id"
      />
      {filterEgor.map((item) => (
        <div key={item.id}>
          <div>ID: {item.id}</div>
          <img src={item.url} />
        </div>
      ))}
    </>
  );
}
