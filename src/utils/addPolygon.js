export const addPolygon = async (map, data) => {
  map.addSource("district", {
    type: "geojson",
    data: data,
    generateId: true,
  });
  map.addLayer({
    id: "district-fills",
    type: "fill",
    source: "district",
    layout: {},
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "totalqolsc"],
        0,
        "#F2F12D",
        40,
        "#EED322",
        45,
        "#E6B71E",
        50,
        "#DA9C20",
        55,
        "#CA8323",
        60,
        "#B86B25",
        65,
        "#A25626",
        100,
        "#8B4225",
        25000000,
        "#723122",
      ],
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        0.9,
        0.2,
      ],
    },
  });
  map.addLayer({
    id: "state-borders",
    type: "line",
    source: "district",
    layout: {},
    paint: {
      "line-color": "#627BC1",
      "line-width": 2,
    },
  });
};
