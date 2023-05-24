import React from 'react';
import ContentLoader from "react-content-loader";

export const Skeleton = (props: any) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f5f5f5"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="127" cy="128" r="127" />
        <rect x="-4" y="267" rx="10" ry="10" width="280" height="30" />
        <rect x="-2" y="311" rx="10" ry="10" width="280" height="88" />
        <rect x="2" y="419" rx="10" ry="10" width="95" height="30" />
        <rect x="119" y="412" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

