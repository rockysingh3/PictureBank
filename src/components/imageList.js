import React from 'react';

const ImageList = (props) => {
    const imageArray = props.images.map(({ description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    })

    return <div>{ imageArray }</div>
}


export default ImageList;