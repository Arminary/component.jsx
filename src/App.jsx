
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const styles = {
    categories: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '10px',
    }
  };
  const categories = [
    {
      imgUrl: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png',
      name: 'Phone & Tablet',
    },

    {
      imgUrl: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/grocies-freelinks.jpg',
      name: 'Groceries',
    },

    {
      imgUrl: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/TELEVISION.jpg',
      name: 'Television',
    },

    {
      imgUrl: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/earphones_300x240.png',
      name: 'Mobile accessories',
    },

    {
      imgUrl: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/refrigerators_300x240.png',
      name: 'Refrigerator',
    },

    {
      imgUrl: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fashion_300x240.png',
      name: 'Mens sneakers',
    },
    
  ];
  
  return (
    <>
      
      <h1>Welcome To Component App</h1>
      <h2>Categories</h2>
      <div style={styles.categories}>
        {categories.map((category) => (
          <ProductCard
          key={category.name}
          name={category.name}
          imgUrl={category.imgUrl}
          />
        ))}
      </div>
    </>
  )
}

export default App
