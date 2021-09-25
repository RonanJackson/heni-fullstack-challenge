const { describe, it } = require('mocha');
const { expect } = require('chai');
const nock = require('nock');
const app = require('../server');
const supertest = require('supertest');

describe('Prints Route', () => {
  const fakeResp = {
    data: {
      info: {
        totalrecordsperquery: 10,
        totalrecords: 1,
        pages: 1,
        page: 1,
      },
      records: [{ test: 'hello' }],
    },
  };

  beforeEach(() => {
    nock('https://api.harvardartmuseums.org')
      .get((uri) => uri.includes('object'))
      .reply(200, fakeResp);
  });

  it('returns a json payload', async () => {
    const resp = await supertest(app).get('/prints');
    expect(resp.status).to.eql(200);
    expect(resp.body.data).to.eql(fakeResp.data);
  });

  afterEach(() => {
    nock.restore();
  });
});
