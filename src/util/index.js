const debounce = (fn,time = 500) =>{
    let timeId = null;
    return (...arg) => {
        timeId && clearTimeout(timeId);
        timeId = setTimeout(() => fn(...arg), time);
    }
}

export {
    debounce
}
