import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {allProductData} from '../dummydata/dropdownSearchdata'

let active = 1;
let items = [];
for (let number = 1; number <= allProductData.length; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
         {number}
    </Pagination.Item>,
  );
}

const PaginatePage = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Pagination>
                        {items.map((value, i) => (
                             <Pagination.Item> {value}</Pagination.Item>
                         ))}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default PaginatePage;