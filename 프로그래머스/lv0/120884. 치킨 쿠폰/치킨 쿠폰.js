function solution(chicken) {
    var answer = 0;
    if(chicken < 10) return 0
    
    const serviceChicken = parseInt(chicken / 10)
    const restCoupon = parseInt(chicken % 10)
    
    return serviceChicken + solution(serviceChicken + restCoupon);
}