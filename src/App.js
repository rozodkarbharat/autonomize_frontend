import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import UserNameForm from './Components/UserNameForm';
import SingleRepoDetail from './Components/SingleRepoDetail';
import RepositoriesGrid from './Components/RepositoriesGrid';
function App() {
  const [isUserData, setisUserData] = useState(false)
  const [userApis, setuserApis] = useState({})

  async function handleSubmit(username){

    try{
        if(username){
          let res= await axios.get( `https://api.github.com/users/${username}`)
          console.log(res.data,'res')
          setisUserData(true);
          setuserApis(res.data)
        }
        else{
          alert("Invalid username")
        }
    }
    catch(err){
      setisUserData(true);
      if(err?.response?.data && err?.response?.data?.message){
        alert(err.response.data.message == "Not Found"?"User not found":"err.response.data.message")
      }
      else{
        alert("Something went wrong")
      }
    }
    
  }
  return (
    <div className="App">
      <UserNameForm handleSubmit={handleSubmit}/>
      {
        Object.keys(userApis)?.length>0 &&
        <RepositoriesGrid userApis={userApis}/>
      }
    </div>
  );
}

export default App;
