-- 코드를 입력하세요
SELECT c1.CART_ID
FROM CART_PRODUCTS c1
INNER JOIN CART_PRODUCTS c2
ON c1.CART_ID = c2.CART_ID
AND c1.NAME LIKE 'Milk'
AND c2.NAME LIKE 'Yogurt'
GROUP BY c1.CART_ID