const getMainImage = data => {
  let biggestBoundingBox = {
    boundingBox: 0,
    name: ''
  };
  const {Labels: labels } = data;
  const labelsWithInstances = labels.filter(({ Instances: instances }) => instances.length > 0)
    .map(({ Instances: instances, Name: name }) => ({ instances, name }));

  for (let i = 0; i < labelsWithInstances.length; i++) {
    const { instances, name } = labelsWithInstances[i];
    for (let j = 0; j < instances.length; j++) {
      const { BoundingBox: boundingBox } = instances[j];
      const {Width: width, Height: height} = boundingBox;
      const boundingBoxWidthAndHeight = Number(width) + Number(height);
      if (boundingBoxWidthAndHeight > biggestBoundingBox.boundingBox) {
        biggestBoundingBox = {
          boundingBox: boundingBoxWidthAndHeight,
          name,
        };
      }
    }
  }
  return `We about 100% sure there is a ${biggestBoundingBox.name}`;
};

module.exports = getMainImage;