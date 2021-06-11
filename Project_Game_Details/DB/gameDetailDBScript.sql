CREATE DATABASE [games] 
GO
USE [games]
GO
/****** Object:  Table [dbo].[gameDetails]    Script Date: 11-06-2021 13:22:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gameDetails](
	[game_Id] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[game_Name] [nvarchar](50) NOT NULL,
	[game_description] [nvarchar](max) NOT NULL,
	[game_releaseDate] [datetime] NOT NULL,
	[game_rating] [numeric](18, 0) NOT NULL,
	[game_feedback] [nvarchar](max) NULL,
 CONSTRAINT [PK_gameDetails] PRIMARY KEY CLUSTERED 
(
	[game_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[gameDetails] ON 

INSERT [dbo].[gameDetails] ([game_Id], [game_Name], [game_description], [game_releaseDate], [game_rating], [game_feedback]) VALUES (CAST(2 AS Numeric(18, 0)), N'FootBall Saga', N'multiplayer football', CAST(N'2021-06-01T00:00:00.000' AS DateTime), CAST(3 AS Numeric(18, 0)), N'Good Game')
INSERT [dbo].[gameDetails] ([game_Id], [game_Name], [game_description], [game_releaseDate], [game_rating], [game_feedback]) VALUES (CAST(10003 AS Numeric(18, 0)), N'Candy Crush', N'Puzzle game for everyone', CAST(N'2021-06-26T00:00:00.000' AS DateTime), CAST(9 AS Numeric(18, 0)), N'awesome')
INSERT [dbo].[gameDetails] ([game_Id], [game_Name], [game_description], [game_releaseDate], [game_rating], [game_feedback]) VALUES (CAST(10004 AS Numeric(18, 0)), N'Temple Run', N'Run for life', CAST(N'2021-06-17T00:00:00.000' AS DateTime), CAST(8 AS Numeric(18, 0)), N'Superb')
SET IDENTITY_INSERT [dbo].[gameDetails] OFF
GO
