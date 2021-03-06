import React from 'react';
import {Link} from "react-router-dom";

const PreviewCard = ({infoProducts}) => {
    const {id, category, title, price, images} = infoProducts;
    return (
        <div className="col-4 mt-4">
            <div className="card h-100" data-id={id} data-category={category}>
                <img src={images[0]} className="card-img-top img-fluid" alt={title}/>
                    <div className="card-body d-flex flex-column justify-content-end align-items-start">
                        <p className="card-text ">{title}</p>
                        <p className="card-text">{price} руб.</p>
                        <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
                    </div>
            </div>
        </div>
    );
};

export default PreviewCard;
