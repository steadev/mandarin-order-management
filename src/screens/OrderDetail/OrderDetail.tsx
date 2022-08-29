import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const params = useParams();
  const [id, setId] = useState<number>();
  
  useEffect(() => {
    console.log(params);
    const { id } = params;
    if (id && !isNaN(+id)) {
      setId(+id);
    }
    console.log(id);
  }, []);
  // order detail info (address, boxes, ...)
  // add
  // delete
  // edit
  return <div>Order Detail: {id}</div>
}

export default OrderDetail;