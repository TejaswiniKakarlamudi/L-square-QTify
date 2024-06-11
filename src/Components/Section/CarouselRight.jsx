import React from 'react'

function ac
() {
  return (
    <div>
      
    </div>
  )
}

export default ac;

// <Grid container spacing={2}>
//            {/* Product Grid and Hero Section */}
//           <Grid item md={token ? 9 : 12}>
//             <div className="product-grid">
//               {/* Hero Section */}
//               <Box className="hero" >
//                 <p className="hero-heading">
//                   India’s <span className="hero-highlight">FASTEST DELIVERY</span> to your door step
//                 </p>
//               </Box>

//               {/* Product Grid */}
//               <Grid container spacing={2}>
//                 {loading ? (
//                   <LoadingComponent />
//                 ) : products.length > 0 ? (
//                   products.map((product) => (
//                     <Grid item xs={12} sm={6} md={3} key={product._id} className='product-card'>
//                       <ProductCard
//                         key={product._id}
//                         product={product}
//                         handleAddToCart={async() => {
//                           /* Add to cart handler here */
//                           await addToCart(
//                             token,
//                             items,
//                             data,
//                             product._id,
//                             1,{
//                               preventDuplicate:true
//                             })

//                         }}
//                       />
//                     </Grid>
//                   ))
//                 ) : (
//                   <NoProductsComponent />
//                 )}
//               </Grid>
//             </div>
//           </Grid>
          
//           {token && (
//               <Grid item xs={12} sm={12} md={3} bgcolor='#E9F5E1'>
//                 <Cart 
//                 products = {data}
//                 items={items}
//                 handleQuantity = {addToCart}
//                 />
//               </Grid>
//           )}

//         </Grid>