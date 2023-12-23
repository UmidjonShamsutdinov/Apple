fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');

export async function allProducts(product){
    const resp = await fetch(`https://dummyjson.com${product}/?limit=1000`)
    return resp.json()
  }


export async function singleProduct(product){
    const resp = await fetch(`https://dummyjson.com/products/${product}`)
    return resp.json()
  }