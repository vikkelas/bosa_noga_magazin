import React from 'react';

const Error404 = ({message}) => {
    return (
        <section className="top-sales">
            <h2 className="text-center">{message}</h2>
            <p>
                Извините, такая страница не найдена!
            </p>
        </section>
    );
};

export default Error404;
