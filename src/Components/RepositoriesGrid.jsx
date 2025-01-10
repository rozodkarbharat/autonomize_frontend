import React, { useEffect, useState } from 'react'
import SingleRepoDetail from './SingleRepoDetail'
import axios from 'axios'
import style from "../Css/RepositoriesGrid.module.css"

const RepositoriesGrid = ({userApis}) => {
    const [repositories, setrepositories] = useState([])

    useEffect(() => {
       async function getRepositories(){
        try{
            let response = await axios.get(userApis.repos_url)
            console.log(response,'resp')
            if(response.status === 200){
                setrepositories(response.data)
            }
            else{
                alert("Couldn't get repositories")
            }
        }
        catch(err){
            alert("Couldn't get repositories")
        }

        }
        getRepositories()
    }, [userApis])

  return (
    <div className={style.repository_grid}>
        {
            repositories.map((repo)=>{

                return <SingleRepoDetail repo={repo} />
            })
        }
    </div>
  )
}

export default RepositoriesGrid
