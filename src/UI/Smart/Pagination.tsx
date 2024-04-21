import { Pagination } from "@mui/material";
import { AppPagination } from "../Dumb/Pagination";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const BreweriesPagination = () => {
    const { pageID } = useParams();
    const [page, setPage] = useState(1);
    
    const onChnageHandler = (event: any, page: any) => {
        setPage(page);
    }
    return (
      <Pagination
        count={10}
        page={page}
        onChange={(event, page) => setPage(page)}
        shape="rounded"
      />
    );
}