import Logo from './components/login-page/Logo'
import MainText from './components/login-page/MainText'
import Input from './components/login-page/Input'
import RememberMe from './components/login-page/RememberMe'
import Button from './components/Button'
import BottomPageButtons from './components/BottomPageButtons'

function App() {

  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center min-h-screen">
        <div className="container-logo">
          <Logo />
        </div>
        <div className="container-form min-w-60 max-w-96">
          <div className="container-main-text">
            <MainText />
          </div>
          <div className="container-email-pw">
            <Input labelFor="email" labelText="Email" inputName="email" inputType="email" inputClass="email-pw-form border-slate-600"/>
            <Input labelFor="password" labelText="Password" inputName="password" inputType="password" inputClass="email-pw-form border-slate-600"/>
          </div>
          <RememberMe />
          <div className="sign-in-buttons">
            <Button buttonText="Sign In" className="bg-black text-white"/>
            <Button buttonText="Sign In With Google" className="bg-white"/>
          </div>
        </div>
        <div className="bottomPageButton">
          <BottomPageButtons bottomPageText="New To SneakerScout?" bottomPageButtonText="Sign Up" />
        </div>
      </div>
      <div className="container-login-img">
        <img src="../../../public/loginpageimg.jfif" alt="Jordan 1s" className='max-h-screen' />
      </div>
    </div>
  )
}

export default App
