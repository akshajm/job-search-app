import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { page } from "../actions/index";
import { PURPLE, WHITE } from "./colors";

const Pagination = () => {
  const dispatch = useDispatch();
  const current_page = useSelector((state) => state.page_reducer);
  const page_update = () => {
    dispatch(page(current_page + 1));
  };
  return (
    <div className="pagination_button">
      <Button
        onClick={page_update}
        style={{ backgroundColor: PURPLE, color: WHITE, marginBottom: "10%" }}
      >
        Load More
      </Button>
    </div>
  );
};

export default Pagination;
