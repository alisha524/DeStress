import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import "./styling/About.css";

const About =() =>{
    const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
    return (
        <div class="container-fluid">
            <div class="header">
                <p>In a society where stigma has destroyed all adventure, the only adventure left is to destroy that stigma.</p>
                <p>An excerpt from TheMindClan</p>
            </div>
        </div>
      );
}

export default About;