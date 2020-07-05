import axios from 'axios';
import ListProductEntity from 'business/entities/ListProductEntity';
import DetailProductEntity from 'business/entities/DetailProductEntity';

export const createProduct = ({ id, thumbnail, price, title, shipping }) => {
  return new ListProductEntity({
    id,
    picture: thumbnail,
    price,
    title,
    free_shipping: shipping && shipping.free_shipping,
  });
}

const ProductRepository = {
  getProductsBySearch(search) {
    return axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
      .then((response) => response.data.results.map(createProduct));
  },

  getProductById(id) {
    return axios.get(`https://api.mercadolibre.com/items/${id}`).then((response) => response.data);
  },

  getProductDescription(id) {
    return axios.get(`https://api.mercadolibre.com/items/${id}/description`).then((response) => response.data);
  },

  async getProductDetail(id) {
    const productData = await this.getProductById(id);
    const productDescription = await this.getProductDescription(id);

    return Promise.resolve(
      new DetailProductEntity({
        id,
        picture: productData.pictures[0].url,
        price: productData.price,
        title: productData.title,
        description: productDescription.plain_text,
        sold_quantity: productData.sold_quantity,
      })
    );
  },
};

export default ProductRepository;
