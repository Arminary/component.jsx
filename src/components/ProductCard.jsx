import React from 'react'

const ProductCard = (props) => {
    const styles = {
        productCard: {
            width: '200px',
            height: '200px',
            border: '1px solid white',
            padding: '10px',
            backgroundColor: 'whitesmoke',
        }
    }
  return (
    <div style={styles.productCard}>
        <img  width='150px' src={props.imgUrl} alt="product" />
        <h5>{props.name}</h5>
    </div>
  )
}

export default ProductCard