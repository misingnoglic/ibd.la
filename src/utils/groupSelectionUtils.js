export const dataDirections = {
  normal: "normal", // label1, label2 is in object
  reverse: "reverse", // label2, label1 is in object
  none: "none", // neither order is in object
};

export const anyHasPrimary = (data, primaryGroupLabel) => {
  return Object.keys(data).some((s) => {
    return pairExists(data, primaryGroupLabel, s);
  });
};

export const pairExists = (data, primaryGroupLabel, secondGroupLabel) => {
  return (
    primaryGroupLabel &&
    secondGroupLabel &&
    primaryGroupLabel !== secondGroupLabel &&
    getDataDirection(data, primaryGroupLabel, secondGroupLabel) !==
      dataDirections.none
  );
};

export const getDataDirection = (data, primaryGroupLabel, secondGroupLabel) => {
  if (
    data.hasOwnProperty(primaryGroupLabel) &&
    data[primaryGroupLabel].hasOwnProperty(secondGroupLabel) &&
    data[primaryGroupLabel][secondGroupLabel].length > 0
  ) {
    return dataDirections.normal;
  } else if (
    data.hasOwnProperty(secondGroupLabel) &&
    data[secondGroupLabel].hasOwnProperty(primaryGroupLabel) &&
    data[secondGroupLabel][primaryGroupLabel].length > 0
  ) {
    return dataDirections.reverse;
  } else {
    return dataDirections.none;
  }
};
