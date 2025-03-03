import { Card } from "../style";
import "boxicons";

export const CardItem = (props) => {
  return (
    <Card bg={props.bg}>
      <div className="card-title">
        <h2>{props.propriedade}</h2>
        <box-icon
          type="solid"
          name={props.icon}
          color={props.iconColor}
          className="icon"
        ></box-icon>
      </div>
      <p className="value">{props.value}</p>
    </Card>
  );
};
