document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('input-dark-mode')

    if(darkModeStorage){
      html.setAttribute("dark", "true")
    }

    inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
        html.setAttribute("dark", "true")
        localStorage.setItem('dark-mode', true)
      }else{
        html.removeAttribute("dark")
        localStorage.removeItem('dark-mode')
      }
    })

  });

  function dark_cor() {
    document.getElementById("ca").style.color = "#fff";
    document.getElementById("myP").style.color = "magenta";
    document.getElementById("myP2").style.color = "blue";
    document.getElementById("myDiv").style.color = "lightblue";
  }