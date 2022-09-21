import { useNavigate } from 'react-router-dom'
import styles from './OrderTable.module.css'

const OrderTable = () => {
  const columns = [
    'id',
    '이름',
    '연락처',
    '주소',
    '주문내용',
    '금액',
    '결제완료',
    '배송여부',
  ]
  const navigate = useNavigate()

  const data = [
    {
      id: 1,
      name: '이명주',
      phone: '01029541187',
      address: '경기도 파주시 교하로 100',
      order: '감귤 1',
      amount: 10000,
      paid: true,
      delivered: true,
    },
    {
      id: 2,
      name: '이명주',
      phone: '01029541187',
      address: '경기도 파주시 교하로 100',
      order: '감귤 2',
      amount: 20000,
      paid: true,
      delivered: true,
    },
    {
      id: 3,
      name: '이명주',
      phone: '01029541187',
      address: '경기도 파주시 교하로 100',
      order: '감귤 3',
      amount: 30000,
      paid: true,
      delivered: true,
    },
    {
      id: 4,
      name: '이명주',
      phone: '01029541187',
      address: '경기도 파주시 교하로 100',
      order: '감귤 4',
      amount: 40000,
      paid: true,
      delivered: true,
    },
  ]
  // order table
  // add
  // delete
  // edit
  const handleOnClick = (index: number) => {
    console.log(index)
    navigate(`/order/${index}`)
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map(
            ({ id, name, phone, address, order, amount, delivered }, index) => (
              <tr
                key={id}
                onClick={() => handleOnClick(index)}
                className={styles.row}
              >
                <td>{id}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>{order}</td>
                <td>{amount}</td>
                <td>{delivered ? '배송완료' : '미배송'}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable
