import React from "react";
import BookImage from "../BookImage";
import { Container, Row, Col } from "../Grid";
import {SaveBtn, DeleteBtn } from "../SaveDeleteBtn"
import API from "../../utils/API";
import "./style.css"

export function Results({ children }) {
    return <ul className="list-group">{children}</ul>;
};


export function ResultItemDelete(props) {


    const handleDeleteBtn = event => {
        API.deleteBook(props.id)
            .then(
                res => {
                    props.loadBooks()
                }
            )
            .catch(err => console.log(err))
    };


    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <BookImage src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        
                        <a rel="noreferrer noopener" className="input-lg view" target="_blank" href={props.link}>
                        <h3>{props.title} </h3>
                        </a>

                        <p>
                            {[props.authors].flat().join(", ")}
                        </p>
                        <p>
                            {props.description}
                        </p>
                        
                        <DeleteBtn type="danger"className="input-lg"onClick={handleDeleteBtn}>Delete</DeleteBtn>

                    </Col>
                </Row>
            </Container>
        </li>
    );
};


export function ResultItemSave(props) {


    const handleSaveBtn = event => {

        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }).then(
            res => console.log(res)
        )
            .catch(
                err => console.log(err)
            )
    };


    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <BookImage src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        
                        <a rel="noreferrer noopener" className="input-lg view" target="_blank" href={props.link}>
                        <h3>{props.title} </h3>
                        </a>

                        <p>
                            {[props.authors].flat().join(", ")}
                        </p>
                        <p>
                            {props.description}
                        </p>
                        
                        <SaveBtn type="primary" className="input-lg" onClick={handleSaveBtn}>Save</SaveBtn>

                    </Col>
                </Row>
            </Container>
        </li>
    );
};