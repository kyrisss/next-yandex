import { FC, useState } from "react";

interface Props {
  title: string;
  genre: "comedy" | "horror";
  seasonsCount: number;
}

export const FilmDetails: FC<Props> = ({ genre, seasonsCount, title }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{title || "unknown film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `кол-во ${seasonsCount}` : "нету"}</p>
      <div>
        <button onClick={() => setCount(p => p - 1)}>-</button>
        {count}
        <button onClick={() => setCount(p => p + 1)}>+</button>
      </div>
    </div>
  );
};
