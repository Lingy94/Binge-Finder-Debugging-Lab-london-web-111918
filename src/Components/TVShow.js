import React from 'react';

const tvShow = (props) => {
  return (
    // console.log(props)
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={() => props.selectShow(props.show)} alt=""/>
    </div>
  );
}

export default tvShow;
