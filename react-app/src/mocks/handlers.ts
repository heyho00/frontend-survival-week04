// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (_req, res, ctx) => {
    const { products } = fixtures;

    return res(
      ctx.status(200), // 안써도 기본이 200
      ctx.json({ products }),
    );
  }),
];

export default handlers;
