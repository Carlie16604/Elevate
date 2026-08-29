import React from "react";

const ArticleImage = ({ src, alt, className = '' }) => {
    if (src) {
        return <img src={src} alt={alt} className={className} />;
    }

    return (
        <div className={`article-image-placeholder ${className}`.trim()} aria-label={`${alt} placeholder`}>
            <p>Add photo here</p>
        </div>
    );
};

export default ArticleImage;
