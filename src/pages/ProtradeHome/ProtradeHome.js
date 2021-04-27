import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import { Route } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [userName, setUserName, removeUserName] = useCookies(['username']);
  const [accessToken, setAccessToken, removeAccessToken] = useCookies(['access_token']);
  const history = useHistory();

  useEffect(() => {
    console.log(accessToken);
    if(Object.keys(userName).length === 0 && Object.keys(accessToken).length === 0){
      history.push("/")
    }
  }, [])

  return (
    <div className="containerHome">
      <Header />
      <Main />
    </div>
  );
}

export default App;
