import React from 'react'
import { BiServer, BiShieldQuarter } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { DiBitbucket, DiMsqlServer, DiNetbeans } from "react-icons/di";
import { FiFigma, FiServer } from "react-icons/fi";

import { GrServerCluster, GrWordpress } from "react-icons/gr";
import { SiVisualstudiocode, SiVisualstudio, SiIntellijidea, SiPostman, SiMicrosoftpowerpoint, SiAdobe, SiAsana, SiStripe } from "react-icons/si";



import './tool.css'
import { FaAws, FaJira, FaServer } from 'react-icons/fa';
import { BsServer } from 'react-icons/bs';

export default function ToolsAndTechnologies() {
  return (
    <>
      <div className="container tool__container">
        <div className="tool__heading">
          <h5 className='text-light'>Something More</h5>
          <h2>Tools & Software</h2>
        </div>
        <div className="tool__content">
          <article className="tool__detail">
            <div className="tool__icon">
              <AiFillGithub />
            </div>
            <div>
              <h4>Git/GitHub</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <SiVisualstudiocode />
            </div>
            <div>
              <h4>VS Code</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <FiServer />
            </div>
            <div>
              <h4>VPS Server</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <BsServer />
            </div>
            <div>
              <h4>MySQL & MongoDB</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <FaAws />
            </div>
            <div>
              <h4>AWS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <SiPostman />
            </div>
            <div>
              <h4>Postman</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <BiShieldQuarter />
            </div>
            <div>
              <h4>Enterprise Architecture</h4>
              <small className="text-light">Intermediate</small>
            </div>{" "}
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <SiVisualstudio />
            </div>
            <div>
              <h4>Visual Studio</h4>
              <small className="text-light">Intermediate</small>
            </div>{" "}
          </article>

          <article className="tool__detail">
            <div className="tool__icon">
              <SiMicrosoftpowerpoint />
            </div>
            <div>
              <h4>MS Project</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <SiAdobe />
            </div>
            <div>
              <h4>Photshop & Illustrator</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <FiFigma />
            </div>
            <div>
              <h4>Figma</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <GrWordpress />
            </div>
            <div>
              <h4>Wordpress</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="tool__detail">
            <div className="tool__icon">
              <DiNetbeans />
            </div>
            <div>
              <h4>NetBeans &
                IntelliJ Idea</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <FaJira />
            </div>
            <div>
              <h4>Jira & Asana</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="tool__detail">
            <div className="tool__icon">
              <DiBitbucket />
            </div>
            <div>
              <h4>BitBucket</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>



        </div>
      </div>
    </>
  )
}
