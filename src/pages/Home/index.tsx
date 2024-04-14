import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Container, MovieContainer } from "./style";
import { Feedback } from "../../components/Feedback";
import { Input } from "../../components/Input";
import { getMovies } from "../../services/movie.service";
import { MovieCard } from "../../components/MovieCard";

interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const Home = () => {
  const [loading, setLoading] = useState(false);
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
      <Loading loading={loading} />
      {movies ? (
        <>
          <Input />
          <MovieContainer>
            {movies.map((movie: MovieProps, index: number) => {
              return (
                <MovieCard
                  key={index}
                  text={movie.title}
                  image={movie.image}
                  amount={movie.price}
                />
              );
            })}
          </MovieContainer>
        </>
      ) : (
        <Feedback
          text="Parece que não há nada por aqui :("
          action="recarregar"
        />
      )}
    </Container>
  );
};
