import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import style from "../Css/SingleRepoDetail.module.css";

const SingleRepoDetail = ({ repo }) => {
  console.log(repo, "repo");
  return (
    <div className={style.single_detail}>
      <img className={style.repo_image} src={repo.owner.avatar_url} alt="" />
      <div>
        <div className={style.repo_name_box}>
          <p className={style.repo_name}>{repo.name}</p>
          <RiVerifiedBadgeFill
            style={{
              color: "green",
              fontSize: "18px",
              marginTop:"3px"
            }}
          />
        </div>
        <div className={style.repo_desc_box}>
          <p className={style.repo_description}>{repo.description || "No Description Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRepoDetail;
