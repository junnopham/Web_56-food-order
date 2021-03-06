import { useEffect, useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";

import FoodItem from "../components/food/FoodItem";

const List = () => {
  const [food, setFood] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <>
      <Row className="mt-3">
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Item active={true}>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
          </Pagination>
        </div>
      </Row>
    </>
  );
};

export default List;
