class PaginationHelper {
  constructor(arr, pageNumber) {
    this.arr = arr;
    this.pageNumber = pageNumber;
  }

  itemCount() {
    const { arr } = this;
    return arr.length;
  }

  pageCount() {
    const pages = [];
    const { arr } = this;
    const { pageNumber } = this;

    while (arr.length > 0) {
      pages.push(arr.splice(0, pageNumber));
    }
    return pages.length;
  }

  pageItemCount(index) {
    const pages = [];
    const { arr } = this;
    const { pageNumber } = this;

    while (arr.length > 0) {
      pages.push(arr.splice(0, pageNumber));
    }
    return pages[index].length;
  }

  pageIndex(itemIndex) {
    const { pageNumber } = this;
    const { arr } = this;

    if (itemIndex < pageNumber && itemIndex > 0) { return 0; }
    if (itemIndex > arr.length) {
      return -1;
    }
    if (itemIndex < 0) {
      return -1;
    }
    return Math.floor((itemIndex) / pageNumber);
  }
}

module.exports = PaginationHelper;
