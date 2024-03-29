-- 코드를 입력하세요
SELECT date_format(os.sales_date, '%Y') YEAR, date_format(os.sales_date, '%m') MONTH, us.GENDER GENDER,
	COUNT(DISTINCT(us.USER_ID)) USERS
FROM ONLINE_SALE os
INNER JOIN (SELECT * FROM USER_INFO WHERE GENDER IS NOT NULL) us
ON us.USER_ID = os.USER_ID
GROUP BY YEAR, MONTH, GENDER
ORDER BY YEAR, MONTH, GENDER ASC