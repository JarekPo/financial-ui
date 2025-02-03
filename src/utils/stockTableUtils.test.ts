import {StockSearchData} from '../types/types';
import {isTableEmpty} from '../utils/stockTableUtils';

describe('isTableEmpty', () => {
  it('should return true for an empty table with empty strings and zero values', () => {
    const emptyData = [
      {
        country: '',
        currency: '',
        exchange: '',
        id: 0,
        mic_code: '',
        name: '',
        symbol: '',
        type: '',
      },
    ];
    expect(isTableEmpty(emptyData)).toBe(true);
  });

  it('should return false for a table with non-empty data', () => {
    const nonEmptyData = [
      {
        country: 'Ireland',
        currency: 'EUR',
        exchange: 'ISE',
        id: 132581,
        mic_code: 'XDUB',
        name: 'Uniphar plc',
        symbol: 'UPR',
        type: 'Common Stock',
      },
    ];
    expect(isTableEmpty(nonEmptyData)).toBe(false);
  });

  it('should throw an error for an empty array', () => {
    const emptyArray: StockSearchData[] = [];
    expect(() => isTableEmpty(emptyArray)).toThrow();
  });
});
