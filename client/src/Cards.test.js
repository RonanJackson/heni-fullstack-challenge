import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { useGetPrints } from './util/printsApi';
import Cards from './Cards';

jest.mock('./util/printsApi', () => ({
  useGetPrints: jest.fn(),
}));

describe('Cards', () => {
  afterAll(() => {
    useGetPrints.mockClear();
  });

  describe('while loading', () => {
    it('should render a loading message', () => {
      useGetPrints.mockImplementation(() => ({
        isLoading: true,
      }));

      const { getByText } = render(<Cards />);
      expect(getByText('Loading Prints...')).toBeTruthy();
    });
  });

  describe('while an error', () => {
    it('should render an error message', () => {
      useGetPrints.mockImplementation(() => ({
        isError: true,
        error: { message: 'There was an error' },
      }));

      const { getByText } = render(<Cards />);
      expect(getByText('There was a problem fetching Prints.')).toBeTruthy();
    });
  });

  describe('with works data', () => {
    it('should render correctly', () => {
      useGetPrints.mockImplementation(() => ({
        data: {
          info: {
            totalrecordsperquery: 10,
            totalrecords: 1,
            pages: 1,
            page: 1,
          },
          records: [
            {
              copyright: null,
              contextualtextcount: 0,
              creditline:
                'Harvard Art Museums/Fogg Museum, Gift of Belinda L. Randall from the collection of John Witt Randall',
              accesslevel: 1,
              dateoflastpageview: '2019-10-04',
              classificationid: 23,
              division: 'European and American Art',
              markscount: 7,
              publicationcount: 0,
              totaluniquepageviews: 15,
              contact: 'am_europeanamerican@harvard.edu',
              colorcount: 8,
              rank: 247941,
              state: 'ii/iii',
              id: 248659,
              verificationleveldescription:
                'Best. Object is extensively researched, well described and information is vetted',
              period: null,
              images: [
                {
                  date: '2006-02-10',
                  copyright: 'President and Fellows of Harvard College',
                  imageid: 70282,
                  idsid: 18816820,
                  format: 'image/jpeg',
                  description: null,
                  technique: null,
                  renditionnumber: 'INV034167',
                  displayorder: 1,
                  baseimageurl:
                    'https://nrs.harvard.edu/urn-3:HUAM:INV034167_dynmc',
                  alttext: null,
                  width: 711,
                  publiccaption: null,
                  iiifbaseuri: 'https://ids.lib.harvard.edu/ids/iiif/18816820',
                  height: 1024,
                },
              ],
              worktypes: [
                {
                  worktypeid: '287',
                  worktype: 'print',
                },
              ],
              imagecount: 1,
              totalpageviews: 16,
              accessionyear: null,
              standardreferencenumber: 'Goodwin 136; John Chaloner Smith 62',
              signed: null,
              classification: 'Prints',
              relatedcount: 0,
              verificationlevel: 4,
              primaryimageurl:
                'https://nrs.harvard.edu/urn-3:HUAM:INV034167_dynmc',
              titlescount: 1,
              peoplecount: 2,
              style: null,
              lastupdate: '2021-09-25T04:30:28-0400',
              commentary: null,
              periodid: null,
              technique: 'Mezzotint',
              edition: null,
              description: null,
              medium: null,
              lendingpermissionlevel: 0,
              title: 'Charles Erskine',
              accessionmethod: 'Gift',
              colors: [
                {
                  color: '#191919',
                  spectrum: '#1eb264',
                  hue: 'Grey',
                  percent: 0.71538461538462,
                  css3: '#000000',
                },
                {
                  color: '#c8c8af',
                  spectrum: '#b55592',
                  hue: 'Green',
                  percent: 0.15852564102564,
                  css3: '#c0c0c0',
                },
                {
                  color: '#afaf96',
                  spectrum: '#8e5ea7',
                  hue: 'Green',
                  percent: 0.046282051282051,
                  css3: '#a9a9a9',
                },
                {
                  color: '#e1c8c8',
                  spectrum: '#c15689',
                  hue: 'Orange',
                  percent: 0.028589743589744,
                  css3: '#d8bfd8',
                },
                {
                  color: '#96967d',
                  spectrum: '#8e5ea7',
                  hue: 'Green',
                  percent: 0.014871794871795,
                  css3: '#808080',
                },
                {
                  color: '#7d7d64',
                  spectrum: '#6cbd45',
                  hue: 'Yellow',
                  percent: 0.014615384615385,
                  css3: '#808080',
                },
                {
                  color: '#64644b',
                  spectrum: '#59ba4a',
                  hue: 'Green',
                  percent: 0.011730769230769,
                  css3: '#696969',
                },
                {
                  color: '#4b4b32',
                  spectrum: '#4ab851',
                  hue: 'Green',
                  percent: 0.01,
                  css3: '#556b2f',
                },
              ],
              provenance:
                'John Witt Randall, bequest; to Belinda Lull Randall, his sister, gift; to Harvard University, 1892\r\n',
              groupcount: 0,
              dated: '1737',
              department: 'Department of Prints',
              dateend: 1737,
              people: [
                {
                  role: 'Artist',
                  birthplace: null,
                  gender: 'male',
                  displaydate: 'c. 1729 - 1765',
                  prefix: null,
                  culture: 'British',
                  displayname: 'James McArdell',
                  alphasort: 'McArdell, James',
                  name: 'James McArdell',
                  personid: 32221,
                  deathplace: null,
                  displayorder: 1,
                },
                {
                  role: 'Artist after',
                  birthplace: 'Devon, England',
                  gender: 'unknown',
                  displaydate: '1701 - 1779',
                  prefix: 'After',
                  culture: 'British',
                  displayname: 'After Thomas Hudson',
                  alphasort: 'Hudson, Thomas',
                  name: 'Thomas Hudson',
                  personid: 26649,
                  deathplace: 'Twickenham, England',
                  displayorder: 2,
                },
              ],
              url: 'https://www.harvardartmuseums.org/collections/object/248659',
              dateoffirstpageview: '2012-11-27',
              century: '18th century',
              objectnumber: 'R1879',
              labeltext: null,
              datebegin: 1737,
              culture: 'British',
              exhibitioncount: 1,
              imagepermissionlevel: 0,
              mediacount: 0,
              objectid: 248659,
              techniqueid: 260,
              dimensions:
                'plate: 32.8 × 22.5 cm (12 15/16 × 8 7/8 in.)\r\nsheet: 33.5 × 23.2 cm (13 3/16 × 9 1/8 in.)',
              seeAlso: [
                {
                  id: 'https://iiif.harvardartmuseums.org/manifests/object/248659',
                  type: 'IIIF Manifest',
                  format: 'application/json',
                  profile: 'http://iiif.io/api/presentation/2/context.json',
                },
              ],
            },
          ],
        },
      }));

      const tree = TestRenderer.create(<Cards />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
