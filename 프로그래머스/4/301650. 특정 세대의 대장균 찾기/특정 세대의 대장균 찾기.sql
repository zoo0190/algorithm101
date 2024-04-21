SELECT
    A.ID ID
FROM ECOLI_DATA A
INNER JOIN ECOLI_DATA B
ON A.PARENT_ID = B.ID
INNER JOIN ECOLI_DATA C
ON B.PARENT_ID = C.ID
WHERE 1 = 1
AND C.PARENT_ID IS NULL
ORDER BY ID ASC;