class CustomMap {
  constructor() {
    this.map = {};
    this.size = 0;
    this.iteratorCount = 0;
    this.iterator = (param = "entry") => ({
      next: () => {
        const entry = this.getEntryByIterator(this.iteratorCount);
        return {
          value:
            param === "entry" ? entry : param === "key" ? entry[0] : entry[1],
        };
      },
    });
  }

  getEntryByIterator(iterator) {
    const entry = Object.entries(this.map)[iterator];
    this.iteratorCount++;

    return entry;
  }

  clear() {
    this.map = {};
    this.size = 0;
  }

  delete(key) {
    if (this.map[key]) {
      delete this.map[key];
      this.size--;
      return true;
    }

    return false;
  }

  entries() {
    return this.iterator("entry");
  }

  forEach(callback) {
    Object.entries(this.map).map(([key, value]) => {
      callback(key, value, this.map);
    });
  }

  get(key) {
    if (this.map[key]) {
      return this.map[key];
    }
  }

  has(key) {
    return !!this.map[key];
  }

  keys() {
    return this.iterator("key");
  }

  set(key, value) {
    if (key && value) {
      this.map = {
        ...this.map,
        [key]: value,
      };
      this.size++;
    }
  }

  values() {
    return this.iterator("value");
  }
}

module.exports = CustomMap;
