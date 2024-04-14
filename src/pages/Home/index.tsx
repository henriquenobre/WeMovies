import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Container, MovieContainer } from "./style";
import { Feedback } from "../../components/Feedback";
import { getMovies } from "../../services/movie.service";
import { MovieCard } from "../../components/MovieCard";

export interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const Home = () => {
  const [loading, setLoading] = useState<boolean>();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    setLoading(true);
    getMovies().then((res) => {
      setMovies(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header />
      {!loading ? (
        <>
          {movies.length ? (
            <MovieContainer>
              {movies.map((movie: MovieProps) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </MovieContainer>
          ) : (
            <Feedback action="recharge" />
          )}
        </>
      ) : (
        <Loading loading={loading} />
      )}
    </Container>
  );
};
