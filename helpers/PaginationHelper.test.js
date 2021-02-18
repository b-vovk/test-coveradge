const { expect } = require('chai');
const PaginationHelper = require('./PaginationHelper');

let helper;
describe('Pagination Helper', () => {
  beforeEach(() => {
    helper = new PaginationHelper(['r', 're', 're', 're', 're'], 4);
  });

  it('should validate page count', () => {
    const pageCount = helper.pageCount();
    expect(pageCount).to.eql(
      2,
    );
  });

  it('should validate item count', () => {
    const itemCount = helper.itemCount();

    expect(itemCount).to.eql(
      5,
    );
  });

  it('should validate item count on a specific page', () => {
    const itemCount = helper.pageItemCount(1);

    expect(itemCount).to.eql(
      1,
    );
  });

  it('should validate page idex of elements on the first page', () => {
    const pageIndex = helper.pageIndex(1);

    expect(pageIndex).to.eql(
      0,
    );
  });

  it('should validate page idex of a specific element', () => {
    const pageIndex = helper.pageIndex(4);

    expect(pageIndex).to.eql(
      1,
    );
  });

  it('should validate error handing of a page idex with a negative index of an element', () => {
    const pageIndex = helper.pageIndex(-10);

    expect(pageIndex).to.eql(
      -1,
    );
  });

  it('should validate error handing of a page idex with an index of an element that is out of scope', () => {
    const pageIndex = helper.pageIndex(20);

    expect(pageIndex).to.eql(
      -1,
    );
  });
});
