SELECT
    B.YEAR,
    B.MAX_SIZE_OF_COLONY - A.SIZE_OF_COLONY YEAR_DEV,
    A.ID
FROM ECOLI_DATA A
INNER JOIN (
    SELECT
        MAX(SIZE_OF_COLONY) MAX_SIZE_OF_COLONY,
        YEAR(DIFFERENTIATION_DATE) YEAR
    FROM ECOLI_DATA
    GROUP BY YEAR
) B
ON YEAR(A.DIFFERENTIATION_DATE) = B.YEAR
ORDER BY B.YEAR ASC, YEAR_DEV ASC;