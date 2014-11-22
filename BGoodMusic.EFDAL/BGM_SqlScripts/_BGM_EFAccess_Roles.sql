USE MVCDemo
GO

CREATE ROLE [bgm_EFAccess]
GO
GRANT INSERT, SELECT, UPDATE on bgm_Rehearsals to bgm_EFAccess;
