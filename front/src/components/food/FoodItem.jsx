import { Button, Card, Col } from "react-bootstrap";

const FoodItem = () => {
  return (
    <Col lg={6} sm={12}>
      <Card className="flex-row">
        <Card.Img
          variant="left"
          src="https://tarkhov.github.io/postboot/assets/img/thumbnail.jpg"
        />
        <Card.Body>
          <Card.Title className="fs-4">Tên món ăn</Card.Title>
          <div className="additional-info">
            <span className="rating d-inline">
              4.1 <i className="bi bi-star-fill text-warning" />
            </span>
            <span className="comment d-inline ms-1">
              12 <i className="bi bi-chat-square-dots-fill" />
            </span>
          </div>
          <p className="card-text mt-1">Món ăn được làm từ gì đó</p>
          <Button>Add Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FoodItem;
