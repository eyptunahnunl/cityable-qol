import MainContext from "context/mapContext";
import { useContext, useEffect } from "react";
import { addPolygon } from "./addPolygon";
import maplibregl from "maplibre-gl";
import data from "services/data.json";
import ChartContext from "context/chartContext";
import { choroplethMap } from "./choroplethMap";
function MapOperations() {
  const { mapState, setActiveDistrict } =
    useContext(MainContext);
  const { choropleth, setChoropleth } =
    useContext(ChartContext);

  useEffect(() => {
    if (mapState) {
      var hoverStateId = null;

      mapState.on("load", async () => {
        addPolygon(mapState, data);
      });
      mapState.on("mousemove", "district-fills", e => {
        if (e.features.length > 0) {
          if (hoverStateId) {
            mapState.setFeatureState(
              {
                source: "district",
                id: hoverStateId,
              },
              {
                hover: false,
              }
            );
          }
        }

        hoverStateId = e.features[0].id;
        mapState.setFeatureState(
          {
            source: "district",
            id: hoverStateId,
          },
          {
            hover: true,
          }
        );
      });
      mapState.on(
        "mouseleave",
        "district-fills",
        function (e) {
          if (hoverStateId) {
            mapState.setFeatureState(
              { source: "district", id: hoverStateId },
              { hover: false }
            );
          }
          hoverStateId = null;
        }
      );

      mapState.on("click", "district-fills", function (e) {
        let districtQuality =
          e.features[0].properties.totalqolsc;
        let districtName =
          e.features[0].properties.districtna;
        let districtId =
          e.features[0].properties.districtid;

        setActiveDistrict({
          id: districtId,
          name: districtName,
          quality: districtQuality,
        });

        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(districtQuality)
          .setHTML(
            `<div id="bg-primaryBlack text-white">${districtName}</div>`
          )
          .addTo(mapState);
      });

      mapState.on(
        "mouseenter",
        "district-fills",
        function () {
          mapState.getCanvas().style.cursor = "pointer";
        }
      );

      // Change it back to a pointer when it leaves.
      mapState.on(
        "mouseleave",
        "district-fills",
        function () {
          mapState.getCanvas().style.cursor = "";
        }
      );
    }
  }, [mapState, choropleth]);
  return null;
}

export default MapOperations;
