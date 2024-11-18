import Logo from './components/login-page/Logo'
import MainText from './components/login-page/MainText'
import Input from './components/login-page/Input'
import RememberMe from './components/login-page/RememberMe'
import Button from './components/Button'
import BottomPageButtons from './components/BottomPageButtons'
import './App.css'

function App() {

  return (
    <div className="container-login">
      <div className="container-logo">
        <Logo />
      </div>
      <div className="container-main-text">
        <MainText />
      </div>
      <div className="container-form">
        <Input labelFor="email" labelText="Email" inputName="email" inputType="email" inputClass="email-pw-form"/>
        <Input labelFor="password" labelText="Password" inputName="password" inputType="password" inputClass="email-pw-form"/>
      </div>
      <RememberMe />
      <div className="sign-in-buttons">
        <Button buttonText="Sign In"/>
        <Button buttonText="Sign In With Google"/>
      </div>
      <BottomPageButtons bottomPageText="New To SneakerScout?" bottomPageButtonText="Sign Up" />
    </div>
  )
}

export default App
