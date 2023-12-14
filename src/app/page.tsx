import { FilmDetails } from "@/components/FilmDetails";

export default function Home() {
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonsCount={filmDetails.seasonsCount}
      />
      <Reviews />
      <Recomendations />
      <footer />
    </div>
  );
}
