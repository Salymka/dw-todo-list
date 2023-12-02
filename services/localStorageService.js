const QUICK_TASK_LIST = 'quickTaskList';
const FOLDERS_LIST = 'foldersList';

class localStorageService {
  updateLocalStorageByKey(key, value) {
    try {
      const data = JSON.parse(localStorage.getItem(key)) || [];
      localStorage.setItem(key, JSON.stringify([...data, value]));
    } catch (e) {
      if (e.name == 'QUOTA_EXCEEDED_ERR')
        // the permissible limit is exceeded
        alert('QUOTA_EXCEEDED_ERR:  localStorage - the permissible limit is exceeded');
      else console.log(e);
    }
  }

  updateFullLocalStorageByKey(key, value) {
    try {
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      if (e.name == 'QUOTA_EXCEEDED_ERR')
        alert('QUOTA_EXCEEDED_ERR:  localStorage - the permissible limit is exceeded');
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
export { QUICK_TASK_LIST, FOLDERS_LIST };
