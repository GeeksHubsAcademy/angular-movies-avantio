import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  debounce = (fn, delay) => {
    let id;
    return (...args) => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(fn, delay, ...args);
    };
  };
  cache = fn => {
    const cached = {};

    return (...args) => {
      const key = args.join("-");
      if (!cached[key]) {
        cached[key] = fn(...args);
      }
      return cached[key];
    };
  };
}
