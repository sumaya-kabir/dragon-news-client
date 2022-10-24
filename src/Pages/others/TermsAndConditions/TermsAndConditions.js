import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Our terms and conditions</h2>
            <h3>Go for registration <Link to='/register'>Register</Link></h3>
        </div>
    );
};

export default TermsAndConditions;