import axios from 'axios';
import ProductRepository from './ProductRepository';

jest.mock('axios');

describe('ProductRepository', () => {
  describe('ProductRepository.getProductsBySearch', () => {
    it('to be defined', async () => {
      expect(ProductRepository.getProductsBySearch).toBeDefined();
    });

    it('ProductRepository.getProductsBySearch to call axios get with url', async () => {
      const search = 'test';
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`;

      axios.get.mockResolvedValue({ data: { results: [] } });
      await ProductRepository.getProductsBySearch(search);
      expect(axios.get).toHaveBeenCalledWith(url);
    });
  });

  describe('ProductRepository.getProductById', () => {
    it('to be defined', async () => {
      expect(ProductRepository.getProductById).toBeDefined();
    });

    it('ProductRepository.getProductById to call axios get with url', async () => {
      const id = 'some_id';
      const url = `https://api.mercadolibre.com/items/${id}`;

      axios.get.mockResolvedValue({ data: { results: [] } });
      await ProductRepository.getProductById(id);
      expect(axios.get).toHaveBeenCalledWith(url);
    });
  });

  describe('ProductRepository.getProductDescription', () => {
    it('to be defined', async () => {
      expect(ProductRepository.getProductDescription).toBeDefined();
    });

    it('ProductRepository.getProductById to call axios get with url', async () => {
      const id = 'some_id';
      const url = `https://api.mercadolibre.com/items/${id}/description`;

      axios.get.mockResolvedValue({ data: { results: [] } });
      await ProductRepository.getProductDescription(id);
      expect(axios.get).toHaveBeenCalledWith(url);
    });
  });

  describe('ProductRepository.getProductDetail', () => {
    it('to be defined', async () => {
      expect(ProductRepository.getProductDetail).toBeDefined();
    });
  });
});
