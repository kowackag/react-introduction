import React from 'react';

const title = 'Kontakt:'

const style = {
    textTransform: 'uppercase',
    color: '#AF2E2E',
};

const Contact = () => {
    return (
        <section>
            <h2 style = {style}>{title}</h2>
            <p><strong>Wojciech Walkiewicz:</strong></p>
            <p>tel: 777 777 777</p>
            <p>mail: ww@wp.pl</p>
            <p>Adres: ul.Kocha 7, 01-111 Warszawa </p>
        </section>
    )
}
export default Contact;
