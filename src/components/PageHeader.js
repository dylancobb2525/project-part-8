import React from 'react';
import '../styles/components-styles/PageHeader.css';

function PageHeader({ title, subtitle, backgroundImage }) {
    const headerStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <section id="page-header" style={headerStyle}>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </section>
    );
}

export default PageHeader;

