SELECT
    A.EMP_NO EMP_NO,
    B.EMP_NAME EMP_NAME,
    CASE
        WHEN AVG(A.SCORE) >= 96
        THEN "S"
        WHEN AVG(A.SCORE) >= 90
        THEN "A"
        WHEN AVG(A.SCORE) >= 80
        THEN "B"
        ELSE "C"
    END GRADE,
    CASE
        WHEN AVG(A.SCORE) >= 96
        THEN B.SAL * 0.2
        WHEN AVG(A.SCORE) >= 90
        THEN B.SAL * 0.15
        WHEN AVG(A.SCORE) >= 80
        THEN B.SAL * 0.1
        ELSE B.SAL * 0
    END BONUS
FROM HR_GRADE A
INNER JOIN HR_EMPLOYEES B
ON A.EMP_NO = B.EMP_NO
GROUP BY A.EMP_NO
ORDER BY EMP_NO ASC;