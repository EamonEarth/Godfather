function isLocalStorageEmpty() {
  return !localStorage.getItem("isDarkTheme");
}

function getStorageTheme() {
  if (isLocalStorageEmpty()) {
    return;
  } else {
    let themeBool = localStorage.getItem("isDarkTheme");
    themeBool && document.querySelector("body").classList.add("dark");
  }
}

getStorageTheme();
