function solution(wallpaper) {
  const twoDimensionalArr = wallpaper.map((v) => v.split(""));
  const hashPositionArr = twoDimensionalArr.reduce((ac, cr, y) => {
    cr.forEach((v, x) => {
      if (v === "#") {
        ac.push([y, x]);
      }
    });
    return ac;
  }, []);

  if (hashPositionArr.length === 1) {
    const [minY, minX] = hashPositionArr[0];
    console.log([minY, minX, minY + 1, minX + 1]);
    return [minY, minX, minY + 1, minX + 1];
  }
  const yArr = hashPositionArr.map((v) => v[0]);
  const xArr = hashPositionArr.map((v) => v[1]);

  return [
    Math.min(...yArr),
    Math.min(...xArr),
    Math.max(...yArr) + 1,
    Math.max(...xArr) + 1,
  ];
}