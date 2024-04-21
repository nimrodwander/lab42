import { Box, CircularProgress } from "@mui/material";

interface Props {
  isLoading: boolean | undefined;
  children: JSX.Element;
  placeholder?: string | undefined;
}

export const Loading: React.FC<Props> = ({ isLoading, children, placeholder }) => {
  return (
    <>
      {isLoading === true && (
        <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      )}
      {isLoading === false && <>{children}</>}
      {isLoading === undefined && <>{placeholder}</>}
    </>
  );
};