//Omnipresent Value

function isOmnipresent(arr, val) {
    for (const subarr of arr) {
      if (!subarr.includes(val)) {
        return false;
      }
    }
    return true;
}
  