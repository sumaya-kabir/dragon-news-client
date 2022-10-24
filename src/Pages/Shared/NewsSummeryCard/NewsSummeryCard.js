import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsSummeryCard = ({news}) => {
    const {_id, author, details, image_url, title, total_view, rating, thumbnail_url} = news;
    console.log(news);
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <Image
                        className='me-2'
                        roundedCircle
                        src={author?.img}
                        style={{height: '60px'}}
                        ></Image>
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaShareAlt className='me-2'></FaShareAlt>
                        <FaRegBookmark></FaRegBookmark>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                    {
                    details.length > 200 ?
                    <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p>
                    :
                    <p>{details}</p>
                    }
                    
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <span>{rating?.number}</span>
                        <FaStar className='text-warning'></FaStar>
                    </div>
                    <div>
                        <FaEye></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;