import logo from './logo.svg';
import './App.css';
 
function App1() {
  return (
    <div className="App1">
     
      <label for="uname" role="label"><b>Username</b></label>
      <input type="text" role="username" name="uname" required />
      <br />
      <label for="psw" role="pwdlabel"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" role="pwdtext" name="psw" required />
      <br />
      <button type="submit" data-testid="login-submit">Login</button>
      <label>
        <input type="checkbox" data-testid="checkbox" checked="checked" name="remember"/>
      </label>
    </div>
  );
}
 
export default App1;