import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData()
    const {title, image_url, details} = news;
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to='/'>
                    <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;