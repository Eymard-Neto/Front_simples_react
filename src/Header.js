import React from 'react';

const Header = (props) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
        
    );
}

export default Header;