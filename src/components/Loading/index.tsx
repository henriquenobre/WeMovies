import { ClipLoader } from "react-spinners";

interface LoadingProps {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingProps) => {
  return (
    <ClipLoader
      loading={loading}
      color="#808080"
      size={83}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
