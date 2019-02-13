import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/es/Button/Button";


const Link = ({active, children, onClick}) => (
    <Button className='btn'
        onClick={onClick}
        disabled={active}
    >
        {children}
    </Button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;
