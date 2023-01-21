-- 코드를 입력하세요
SELECT history_id, car_id, 
    date_format(start_date, '%Y-%m-%d') start_date, date_format(end_date, '%Y-%m-%d') end_date,
    IF(datediff(end_date, start_date) + 1 >= 30, '장기 대여', '단기 대여') rent_type
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE date_format(start_date, '%Y-%m') = '2022-09'
ORDER BY HISTORY_ID DESC;