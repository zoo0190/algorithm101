SELECT count(fi.FISH_TYPE) FISH_COUNT, fni.FISH_NAME FISH_NAME
FROM FISH_INFO fi
INNER JOIN FISH_NAME_INFO fni
ON fi.FISH_TYPE = fni.FISH_TYPE
GROUP BY fni.FISH_NAME
ORDER BY FISH_COUNT DESC;