SELECT
    A.ITEM_ID ITEM_ID,
    C.ITEM_NAME ITEM_NAME,
    C.RARITY RARITY
FROM ITEM_TREE A
INNER JOIN ITEM_INFO B
ON A.PARENT_ITEM_ID = B.ITEM_ID
INNER JOIN ITEM_INFO C
ON A.ITEM_ID = C.ITEM_ID
WHERE 1 = 1
AND A.PARENT_ITEM_ID IS NOT NULL
AND B.RARITY = 'RARE'
ORDER BY ITEM_ID DESC;
