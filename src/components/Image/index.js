import { useState, forwardRef } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ onError: customFallBack = images.noImage, src, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return <img ref={ref} src={fallBack || src} {...props} onError={handleError}></img>;
});

export default Image;
