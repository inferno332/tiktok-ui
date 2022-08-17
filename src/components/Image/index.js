import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';

const Image = forwardRef(({ onError: customFallBack = images.noImage, src, alt, ...props }, ref) => {
    const [onError, setOnError] = useState('');
    const handleError = () => {
        setOnError(customFallBack);
    };
    return <img ref={ref} src={onError || src} alt={alt} {...props} onError={handleError}></img>;
});

Image.propTypes = {
    onError: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
