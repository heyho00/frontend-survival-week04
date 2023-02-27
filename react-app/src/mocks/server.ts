// 따로 eslint 잡아줄 수 있지만 일단 이렇게 잡는다.
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';

import handlers from './handlers';

const server = setupServer(...handlers);

export default server;
