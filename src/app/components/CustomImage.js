import React from 'react';
import Image from 'next/image';

function CustomImage({ path, alt, width, height }) {
    return (
        <Image src={path} // Default image
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            responsive="true" />
    )
}

export default CustomImage