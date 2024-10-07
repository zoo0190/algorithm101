function solution(park, routes) {
    const twoDimensionalArray = park.map((v) => v.split(''))
    const startPoint = twoDimensionalArray.reduce((ac, cr, i) => {
        const findStartPoint = cr.findIndex((v) => v === 'S')
        if(findStartPoint !== -1) {
            ac = [i, findStartPoint]
        }
        return ac
    }, [])

    const recur = (point, routesArr) => {
        if(!routesArr.length) {
            return point
        }
        
        const routePop = routesArr.pop()
        const [direction, distance] = routePop.split(' ')
        let [tempY, tempX] = [point[0], point[1]]
        for(const route of Array(+distance).fill(direction)) {
            if(route === 'N') {
                tempY = tempY - 1
            }
            if(route === 'S') {
                tempY = tempY + 1
            }
            if(route === 'W') {
                tempX = tempX - 1
            }
            if(route === 'E') {
                tempX = tempX + 1
            }

            const maxY = twoDimensionalArray.length - 1
            const maxX = twoDimensionalArray[0].length - 1

            
            if(maxY < tempY || tempY < 0 || maxX < tempX || tempX < 0 || twoDimensionalArray[tempY][tempX] === 'X') {
                return recur(point, routesArr)
            }
        }
        return recur([tempY, tempX], routesArr)
    }
    
    return recur(startPoint, routes.reverse())
}