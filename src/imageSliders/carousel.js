import React,{Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { carouselData } from '../dummydata/dropdownSearchdata'
import { fetchGIFS } from '../httpContent/endpoints'
import './carousel.css'

class ImageSliders extends Component {
    constructor(props) {
        super(props)
            this.state = {
                imageData: null,
                error: null,
            }
    }

    render() {
        fetchGIFS()
            .then(result => this.setState({ imageData: result.data }))
            .catch(error => this.setState(error))

        const { imageData } = this.state;
        if (imageData) {
        return (
            <Carousel>
                {carouselData.map((data, i) => (
                    <Carousel.Item interval={5000}>
                        <img
                            className="imageItem w-100 p-10"
                            src={imageData.data[i].images['downsized'].url}
                            alt={data.h3}
                        />
                        <Carousel.Caption>
                            <h3>{data.h3}</h3>
                            <p>{data.p}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
    )
        } else {
            return (
                <p> Loading ... </p>
            )
        }
    }
   
}

export default ImageSliders;
