import './App.css'

function App() {
  const body = document.body
  const lightTheme = 'light'
  const darkTheme = 'dark'

  // assign local property: theme
  let theme

  // check if localStorage already contains theme
  if (localStorage) {
    theme = localStorage.getItem('theme')
  }

  // if theme has been selected, apply it
  // otherwise, default to light theme
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  // handle theme switch
  const switchTheme = () => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      localStorage.setItem('theme', 'light')
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      localStorage.setItem('theme', 'dark')
      theme = darkTheme
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={switchTheme}>change theme</button>
      </header>
    </div>
  )
}

export default App
