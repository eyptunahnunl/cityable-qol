import MainContext from "context/mapContext";
import { useContext, useEffect, useState } from "react";
import {
  economyFilter,
  educationFilter,
  energyFilter,
  environmentFilter,
  governanceFilter,
  healthFilter,
  housingFilter,
  populationFilter,
  securityFilter,
  transportationFilter,
  urbanFilter,
} from "utils/dataFilter";

import economy from "services/economy.json";
import education from "services/education.json";
import energy from "services/energy.json";
import environment from "services/environment.json";
import governance from "services/governance.json";
import health from "services/health.json";
import housing from "services/housing.json";
import population from "services/population.json";
import security from "services/security.json";
import transportation from "services/transportation.json";
import urban from "services/urban.json";

import ChartContext from "context/chartContext";
function useFilter() {
  const { chart } = useContext(ChartContext);

  const { activeDistrict } = useContext(MainContext);
  const [data, setData] = useState([
    {
      type: "environmentScore",
      value: 9.42983977893,
    },
    {
      type: "parkGreenAreaDistance",
      value: 0.973084032434,
    },
    {
      type: "highBuildingDensity",
      value: 0.879375009693,
    },
    {
      type: "totalResidenceRatio",
      value: 0.292250922509,
    },
    {
      type: "environmentCleaning",
      value: 0.328518707,
    },
  ]);

  useEffect(() => {
    if (chart === "Economy") {
      setData(economyFilter(economy, activeDistrict)[0]);
    } else if (chart === "Education") {
      setData(
        educationFilter(education, activeDistrict)[0]
      );
    } else if (chart === "Energy") {
      setData(energyFilter(energy, activeDistrict)[0]);
    } else if (chart === "Environment") {
      setData(
        environmentFilter(environment, activeDistrict)[0]
      );
    } else if (chart === "Governance") {
      setData(
        governanceFilter(governance, activeDistrict)[0]
      );
    } else if (chart === "Health") {
      setData(healthFilter(health, activeDistrict)[0]);
    } else if (chart === "Housing") {
      setData(housingFilter(housing, activeDistrict)[0]);
    } else if (chart === "Population") {
      setData(
        populationFilter(population, activeDistrict)[0]
      );
    } else if (chart === "Security") {
      setData(securityFilter(security, activeDistrict)[0]);
    } else if (chart === "Transportation") {
      setData(
        transportationFilter(
          transportation,
          activeDistrict
        )[0]
      );
    } else if (chart === "Urban") {
      setData(urbanFilter(urban, activeDistrict)[0]);
    }
  }, [chart, activeDistrict]);

  return data;
}

export default useFilter;
