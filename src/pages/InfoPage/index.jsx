import Navbar from "components/Navbar";
import React from "react";
import { Icon } from "utils/Icons";
import infograph from "./Image/infograph.png";
import main from "./Image/MainPage.png";
import energy from "./Image/energy.png";
import natural from "./Image/natural.png";
import busines from "./Image/business.png";
import environment from "./Image/environment.png";
import thinklive from "./Image/thinklive.png";
import { NavLink } from "react-router-dom";

function InfoPage() {
  return (
    <>
      <div className="bg-[#0C0C0E] h-full text-white">
        {/* Header */}
        <header className="container  h-40 mx-auto flex justify-between p-10">
          <div className="flex justify-between items-center w-full ">
            <ul className="flex gap-5 text-xl font-light ">
              <NavLink to={"/"}>Istanbul QoL</NavLink>
              <NavLink to={"/mylifequality"}>
                MyLifeQoL
              </NavLink>
            </ul>
            <NavLink to={"/"}>
              <Icon name={"logo"} />
            </NavLink>
          </div>
        </header>

        {/* Welcome */}
        <div className="container h-72  m-2 mx-auto flex px-5">
          <div className="p-3 w-[50%]">
            <h2 className="text-3xl font-bold my-2">
              QoL of Istanbul
            </h2>
            <ul className="list-disc p-2 text-lg grid gap-2 font-light">
              <li>
                An open source blog theme powered by Nuxt
                Content, editable on Nuxt Studio.
              </li>
              <li>
                Write pages in Markdown and Vue components
                with the MDC syntax.
              </li>
              <li>
                Use 30+ built-in components in your Markdown
                pages.
              </li>
              <li>
                Use 30+ built-in components in your Markdown
                pages.
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-[50%] pr-5">
            <img src={infograph} alt="" />
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto grid gap-5 p-5 mt-5">
          <h3 className="text-5xl border-b">
            Introduction
          </h3>
          <p>
            <span className="font-semibold text-4xl">
              C
            </span>
            ityAble Data Analytics Platform is an integrated
            web platform where city-relevant information is
            interactively visualised with map-based
            geographic analyses using open source data
            provided by Istanbul Metropolitan Municipality
            Open Data Portal, National Smart City Open Data
            Platform (ULASAV), TUIK Statistics Data Portal
            along with open data portals of EEA, ESA, and
            NASA.
          </p>
          <p className="mt-2">
            CityAble – QoL, on the other hand, is a platform
            that provides unit-based quality of life with
            interactive dashboards containing geographical
            and statistical data, within the concept of
            enhancing the quality of life of citizens
            through the provision of sustainable services,
            which is the primary objective of smart cities.
            With CityAble – QoL, a platform is offered for
            Istanbul where the quality of life factors and
            groups can be evaluated holistically at district
            level, which can be benefited by all
            stakeholders operating in the city, primarily
            citizens, administrative and local governments.
          </p>
        </div>

        {/* Qol Of Istanbul */}
        <div className="container mx-auto grid gap-5 p-5 mt-5">
          <h3 className="text-5xl">Qol Of Istanbul</h3>
          <p className="mt-2">
            With the QoL of Istanbul interactive panel
            provided by CityAble – QoL, users are provided
            with district-based urban life quality index
            scores calculated under 11 thematic categories
            as Education, Economy/Finance,
            Energy/Consumption, Environment, Governance,
            Health, Housing/Shelter, Population
            Characteristics, Security/Social Order,
            Transportation and Urban Functions. The quality
            of life index and thematic scores were
            calculated with the weights determined as a
            result of the questionnaire applied to the
            experts for each district and presented under
            thematic groups with their sub-criteria. For
            example;
          </p>
        </div>
        <div className="container  m-2 mx-auto flex px-5">
          <div className="p-3 w-[50%]">
            <ul className="list-disc p-2 text-lg grid gap-2 font-light">
              <li>
                Transportation Score calculated with a
                single and holistic evaluation of
                transportation parameters such as public
                transportation, access to highways and
                access to metro stops,{" "}
              </li>
              <li>
                Urban Functions Score calculated with a
                single and holistic evaluation of
                accessibility to shopping centres, cultural
                facilities and various city functions,
              </li>
              <li>
                Population Characteristics Score calculated
                with a single and holistic evaluation of
                population density, literacy, university
                graduates or various demographic factors,
              </li>
              <li>
                Emergency Score calculated a single and
                holistic evaluation of the distance to
                emergency facilities, fire stations and the
                total number of pharmacies,{" "}
              </li>
              <span className="font-semibold">
                are presented to users with interactive
                graphics.{" "}
              </span>
            </ul>
          </div>
          <div className="flex justify-center w-[50%] pr-5">
            <img src={main} alt="" />
          </div>
        </div>
      </div>

      <div className="container flex justify-around   mx-auto py-5">
        <img
          src={busines}
          alt=""
          width={300}
          height={300}
        />
        <img
          src={environment}
          alt=""
          width={300}
          height={300}
        />
      </div>

      {/* My Life Quality */}
      <div className="container mx-auto">
        <h3 className="text-5xl py-2 px-1">
          My Life Quality
        </h3>
        <div className="container mx-auto grid grid-cols-2">
          <p className="">
            With the My Life Qualtiy interactive panel
            provided by CityAble – QoL, the district-based
            urban quality of life index score is calculated
            and presented according to the importance levels
            determined by the users interactively. Quality
            of life scores are presented with interactive
            graphics on a district basis calculated
            instantly according to the importance level
            determined by the users from 1 to 5 for thematic
            groups of Education, Economy/Finance,
            Energy/Consumption, Environment, Governance,
            Health, Housing/Shelter, Population
            Characteristics, Security/Social Order,
            Transportation and Urban Functions. Thus, users
            can determine their own quality of life
            calculations according to the weights they have
            determined, and determine the districts with the
            highest quality of life for themselves.
          </p>
          <div className="flex justify-center items-center">
            <img src={energy} alt="" />
          </div>
        </div>
      </div>

      {/* QoL at Local Unit Area */}
      <div className="mx-auto py-5 bg-[#0C0C0E] text-white ">
        <h3 className="text-5xl py-4 text-center">
          QoL at Local Unit Area
        </h3>
        <div className="container mx-auto ">
          <p className="">
            With the QoL at Local Unit Area interactive
            panel provided by CityAble – QoL, a local
            unit-based urban quality of life index is
            presented to users interactively in 89
            neighborhoods covering Tuzla - Pendik - Çayırova
            - Darıca and Gebze districts. As a result of
            different criterion reduction analyzes, 32
            criteria determined in 7 themes, namely Local
            Environment, Economy/Finance,
            Security/Emergency, City Functions,
            Housing/Housing, Population Characteristics and
            Transportation, are multiplied by the importance
            levels determined by using different weighting
            approaches and related unit-based Quality of
            Life calculated for the neighborhoods in the
            districts.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="container flex justify-evenly  py-5">
            <img
              src={natural}
              alt=""
              width={400}
              height={400}
            />
            <img
              src={thinklive}
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
