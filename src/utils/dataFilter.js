import thematicData from "services/thematicIndex.json";

const filterById = (data, activeDistrict) => {
  const filter = data.filter(
    district => district.districtID === activeDistrict.id
  );
  return filter;
};
export const economyFilter = (data, activeDistrict) => {
  // const { activeDistrict } = useContext(MainContext);
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "unemployedPop",
          value: chartdata.unemployedPop,
        },
        {
          type: "carOwners",
          value: chartdata.carOwners,
        },
        {
          type: "vehicleOwnership",
          value: chartdata.vehicleOwnership,
        },
        {
          type: "purchasingPower",
          value: chartdata.purchasingPower,
        },
        {
          type: "businessCount",
          value: chartdata.businessCount,
        },
        {
          type: "economyScore",
          value: chartdata.economyScore,
        },
      ];
    }
  );
  return datas;
};
export const educationFilter = (data, activeDistrict) => {
  // const { activeDistrict } = useContext(MainContext);
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "illiterateRate",
          value: chartdata.illiterateRate,
        },
        {
          type: "primarySchoolDistance",
          value: chartdata.primarySchoolDistance,
        },
        {
          type: "highSchoolGrads",
          value: chartdata.highSchoolGrads,
        },
        {
          type: "universityGrads",
          value: chartdata.universityGrads,
        },
        {
          type: "masterGrads",
          value: chartdata.masterGrads,
        },
        {
          type: "phdGrads",
          value: chartdata.phdGrads,
        },
        {
          type: "primaryEducationGrads",
          value: chartdata.primaryEducationGrads,
        },
        {
          type: "highSchoolDistance",
          value: chartdata.highSchoolDistance,
        },
        {
          type: "universityDistance",
          value: chartdata.universityDistance,
        },
        {
          type: "kindergartenDistance",
          value: chartdata.kindergartenDistance,
        },
        {
          type: "educationScore",
          value: chartdata.educationScore,
        },
      ];
    }
  );
  return datas;
};
export const energyFilter = (data, activeDistrict) => {
  // const { activeDistrict } = useContext(MainContext);
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "energyConsumptionScore",
          value: chartdata.energyConsumptionScore,
        },
        {
          type: "domesticWaste",
          value: chartdata.domesticWaste,
        },
        {
          type: "waterConsumption",
          value: chartdata.waterConsumption,
        },
        {
          type: "gasConsumption",
          value: chartdata.gasConsumption,
        },
        {
          type: "watercuts",
          value: chartdata.watercuts,
        },
      ];
    }
  );
  return datas;
};
export const environmentFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "environmentScore",
          value: chartdata.environmentScore,
        },
        {
          type: "parkGreenAreaDistance",
          value: chartdata.parkGreenAreaDistance,
        },
        {
          type: "highBuildingDensity",
          value: chartdata.highBuildingDensity,
        },
        {
          type: "totalResidenceRatio",
          value: chartdata.totalResidenceRatio,
        },
        {
          type: "environmentCleaning",
          value: chartdata.environmentCleaning,
        },
      ];
    }
  );
  return datas;
};
export const governanceFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "complaintApplications",
          value: chartdata.complaintApplications,
        },
        {
          type: "socialAid",
          value: chartdata.socialAid,
        },
        {
          type: "sesScore",
          value: chartdata.sesScore,
        },
        {
          type: "segeScore",
          value: chartdata.segeScore,
        },
        {
          type: "governanceScore",
          value: chartdata.governanceScore,
        },
      ];
    }
  );
  return datas;
};
export const healthFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "healthCenterDistance",
          value: chartdata.healthCenterDistance,
        },
        {
          type: "hospitalDistance",
          value: chartdata.hospitalDistance,
        },
        {
          type: "healthBurden",
          value: chartdata.healthBurden,
        },
        {
          type: "fuelStationDistance",
          value: chartdata.fuelStationDistance,
        },
        {
          type: "industrialAreaDistance",
          value: chartdata.industrialAreaDistance,
        },
        {
          type: "pharmacyCount",
          value: chartdata.pharmacyCount,
        },
        {
          type: "healthScore",
          value: chartdata.healthScore,
        },
      ];
    }
  );
  return datas;
};
export const housingFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "unitAreaMarketValue",
          value: chartdata.unitAreaMarketValue,
        },
        {
          type: "avgIncome",
          value: chartdata.avgIncome,
        },
        {
          type: "avgSavings",
          value: chartdata.avgSavings,
        },
        {
          type: "avgTotalExpense",
          value: chartdata.avgTotalExpense,
        },
        {
          type: "avgTotalHousingExpense",
          value: chartdata.avgTotalHousingExpense,
        },
        {
          type: "avgHouseholdSize",
          value: chartdata.avgHouseholdSize,
        },
        {
          type: "housingScore",
          value: chartdata.housingScore,
        },
      ];
    }
  );
  return datas;
};
export const populationFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "populationDensity",
          value: chartdata.populationDensity,
        },
        {
          type: "childPopDensity",
          value: chartdata.childPopDensity,
        },
        {
          type: "youngPopDensity",
          value: chartdata.youngPopDensity,
        },
        {
          type: "aduldPopDensity",
          value: chartdata.aduldPopDensity,
        },
        {
          type: "seniorPopDensity",
          value: chartdata.seniorPopDensity,
        },
        {
          type: "elderlyPopDensity",
          value: chartdata.elderlyPopDensity,
        },
        {
          type: "populationScore",
          value: chartdata.populationScore,
        },
      ];
    }
  );
  return datas;
};
export const securityFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "fireStationDistance",
          value: chartdata.fireStationDistance,
        },
        {
          type: "policeStationDistance",
          value: chartdata.policeStationDistance,
        },
        {
          type: "earthquakeMortalityRisk",
          value: chartdata.earthquakeMortalityRisk,
        },
        {
          type: "earthquakeDemolitionRisk",
          value: chartdata.earthquakeDemolitionRisk,
        },
        {
          type: "securityScore",
          value: chartdata.securityScore,
        },
      ];
    }
  );
  return datas;
};
export const transportationFilter = (
  data,
  activeDistrict
) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "isparkCarParkingDistance",
          value: chartdata.isparkCarParkingDistance,
        },
        {
          type: "railwayStationDistance",
          value: chartdata.railwayStationDistance,
        },
        {
          type: "mainRoadDistance",
          value: chartdata.mainRoadDistance,
        },
        {
          type: "waterwayStationDistance",
          value: chartdata.waterwayStationDistance,
        },
        {
          type: "taxiStationDistance",
          value: chartdata.taxiStationDistance,
        },
        {
          type: "minibusStopDistance",
          value: chartdata.minibusStopDistance,
        },
        {
          type: "microMobilityDistance",
          value: chartdata.microMobilityDistance,
        },
        {
          type: "busStopDistance",
          value: chartdata.busStopDistance,
        },
        {
          type: "avgTraffic",
          value: chartdata.avgTraffic,
        },
        {
          type: "transportationScore",
          value: chartdata.transportationScore,
        },
      ];
    }
  );
  return datas;
};
export const urbanFilter = (data, activeDistrict) => {
  const datas = filterById(data, activeDistrict).map(
    chartdata => {
      return [
        {
          type: "administrativeFacilityDistance",
          value: chartdata.administrativeFacilityDistance,
        },
        {
          type: "religiousFacilityDistance",
          value: chartdata.religiousFacilityDistance,
        },
        {
          type: "culturalFacilityDistance",
          value: chartdata.culturalFacilityDistance,
        },
        {
          type: "bankCount",
          value: chartdata.bankCount,
        },
        {
          type: "atmCount",
          value: chartdata.atmCount,
        },
        {
          type: "sportCentersDistance",
          value: chartdata.sportCentersDistance,
        },
        {
          type: "urbanFunctionsScore",
          value: chartdata.urbanFunctionsScore,
        },
      ];
    }
  );
  return datas;
};

export const PieChartData = activeDistrict =>
  thematicData
    .filter(
      district => district.districtid === activeDistrict.id
    )
    .map(chartDistrict => {
      return [
        {
          type: "Economy",
          value: chartDistrict.economyFinance,
        },
        {
          type: "Education",
          value: chartDistrict.educationScore,
        },
        {
          type: "Energy",
          value: chartDistrict.populationScore,
        },
        {
          type: "Environment",
          value: chartDistrict.environmentScore,
        },
        {
          type: "Governance",
          value: chartDistrict.housingScore,
        },
        {
          type: "Health",
          value: chartDistrict.populationScore,
        },
        {
          type: "Housing",
          value: chartDistrict.populationScore,
        },
        {
          type: "Population",
          value: chartDistrict.populationScore,
        },
        {
          type: "Security",
          value: chartDistrict.populationScore,
        },
        {
          type: "Transportation",
          value: chartDistrict.populationScore,
        },
        {
          type: "Urban",
          value: chartDistrict.populationScore,
        },
      ];
    });
