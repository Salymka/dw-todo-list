class localStorageService {
  updateLocalStorageByKey(key, value) {
    try {
      const data = JSON.parse(localStorage.getItem(key)) || [];
      localStorage.setItem(key, JSON.stringify([...data, value]));
    } catch (e) {
      // якщо перевищено ліміт
      if (e.name == 'QUOTA_EXCEEDED_ERR')
        alert('QUOTA_EXCEEDED_ERR:  localStorage перевищено допустимий ліміт');
      else console.log(e);
    }
  }

  getFromLocalStorageByKey(key) {
    try {
      const data = JSON.parse(localStorage.getItem(key)) || [];
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new localStorageService();
