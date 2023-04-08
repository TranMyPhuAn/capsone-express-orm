-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `binh_luan`;
CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_binh_luan` datetime DEFAULT CURRENT_TIMESTAMP,
  `noi_dung` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(1,	1,	2,	'2023-04-08 10:44:04',	'Rất đẹp, xứng đáng 1000 likes'),
(2,	2,	2,	'2023-04-08 10:44:04',	'Rất đẹp, xứng đáng 1000 likes'),
(3,	1,	1,	'2023-04-08 10:44:04',	'Rất đẹp, xứng đáng 1000 likes');

DROP TABLE IF EXISTS `hinh_anh`;
CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(100) DEFAULT NULL,
  `duong_dan` varchar(100) DEFAULT NULL,
  `mo_ta` text,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1,	'Polka Dots Pretty',	'https://pin.it/4ZWBDbo',	'Classic Simplicity... Rose Pearls & Jeans',	1),
(2,	'Хризантемы',	'https://pin.it/1ymC85C',	'Хризантемы & Хризантемы',	3),
(3,	'chim bay',	'https://pin.it/z2acH50',	'Đôi uyên ương bay lượng',	3),
(4,	'Mắt biết',	'https://pin.it/zTieG0H',	'con mắt bầu trời xanh',	4),
(5,	'Natur ideas',	'https://pin.it/1KUE6bl',	'900+ Natur ideas | nature, scenery, beautiful nature',	5),
(6,	'Jupiter Real Estate',	'https://pin.it/26nm2jk',	'Jupiter Real Estate, Palm Beach Gardens Waterfront Properties and Country Clubs',	6),
(7,	'30+ Eye Catching Red Tattoos Ideas And Their Meanings',	'https://pin.it/26nm2jk',	'Recently, there are a lot of new fans of the red tattoos.',	7),
(8,	'YQ Ob) @ DV WLVVVU PEI Ob CROWD DOPORY ERHEERAS Ye COVOYD) & Bp HAY COL GH OCHDEOGEY - iFunny',	'https://pin.it/26nm2jk',	'IFunny is fun of your life. Images, GIFs and videos featured seven times a day. Your anaconda definitely wants some. Fun fact: we deliver faster than Amazon.',	8),
(9,	'Maggie',	'https://pin.it/1Ty07Iq',	'Leonardo Giovanni became a father at the age of twenty. The new mafia Don was a closed off cold man that left people shaking in fear. He loved his daughter Maggie so much. He changed his ways for her. Leo wanted the best for his little girl. But one morning all of that changed.',	9),
(10,	'Grunge aesthetic | Grunge photography, Rain photography, Rainy day aesthetic',	'https://pin.it/2fOEXxs',	'Jan 31, 2022 - This Pin was created by Alexis Noehmi on Pinterest. Grunge aesthetic',	10),
(11,	'Beynac-et-Cazenac Morning Light',	'https://pin.it/3HwnYdI',	'This is the street used in the opening scenes of the movie \'Chocolat\'.',	1),
(12,	'Japanese Landscape Digital Image Illustration Art Instant - Etsy',	'https://pin.it/soHU73e',	'Japanese landscape, digital image, illustration art, instant download printable, more than 24 different photos, midjourney ai, DIY art Welcome to MikiDownload, your go-to destination for high-quality digital products that inspire creativity and elevate your projects.',	1),
(13,	'Gardens of My Dreams | Romantic Backyard Garden Ideas',	'https://pin.it/1JMqXZ5',	'Who\'s with me on converting ordinary backyard into a romantic garden of your dreams? In this post I\'m sharing my favorite backyard garden design and ideas that are just too beautiful to pass on. A',	4),
(14,	'Cozy up in the #booknook',	'https://pin.it/W2lQ06J',	'Rainy day in the reading nook☕😌🌧',	5),
(15,	'Le jardin de Sophie - France',	'https://pin.it/2WY051v',	'Le jardin de Sophie - France',	6),
(16,	'Brown Rabbit Eating Red Tomatoes 🍅',	'https://pin.it/1zvBTAH',	'Brown Rabbit Eating Red Tomatoes 🍅 #rabbit #bownrabbit #india #usa #red #tomatoes #love #cute #whiterabbit #netherlanddwarf #videos #animallover',	7),
(17,	'Watercolour flower painting',	'https://pin.it/5OB6i5I',	'Watercolour flower painting on silk wallpaper. View my full collection of art prints with free worldwide delivery.',	9),
(18,	'Belly Fat and Love Handles are difficult to go* but* with pe�',	'https://pin.it/7eMVyo4',	'HOW I LOST MY STUBBORN BELLY FAT by Sophia Tinis',	5),
(19,	'AI Art Shop',	'https://pin.it/fgiO0MF',	'Prachtige ontwerpen op canvas, plexiglas, alu-dibond, papier en galerieprint voor jouw muur!',	4),
(20,	'7 Enchanted Beds Fit For A Fairytale',	'https://pin.it/6QgZ5jg',	'Do you ever wish you lived in a fairytale? Not only would you experience true magic in everyday life, you’d be living in the most whimsical-looking world filled with soft, dreamy colors and coziness galore. Our fairytale-themed November catalog has me dreaming to live in a magical place and it’s inspired me to infuse some',	5),
(21,	'α и g є ℓ ι ℓ ℓ ο',	'https://pin.it/2jbFj4d',	'Wonderful 📷 👌',	7),
(22,	'Pin de ❤️❤️❤️❤️🙂🙂🙂 Jola8412 en LIVE WALLPAPER 1',	'https://pin.it/6WQx065',	'04-dic-2021 - ❤️❤️❤️❤️🙂🙂🙂 Jola8412 descrubrió este Pin. Descubre (y guarda) tus propios Pines en Pinterest.',	1),
(23,	'Yellow Floral Songbird by Lisa S Baker',	'https://pin.it/Gcmxw0X',	'Yellow Floral Songbird is a piece of digital artwork by Lisa S Baker which was uploaded on December 2nd, 2022',	6),
(24,	'Japanese spring',	'https://pin.it/5EVNj5M',	'Phone wallpaper',	4),
(25,	'Rumah Jepun',	'https://pin.it/2nCVn4Z',	'Rumah Jepun && Rumah Jepun',	1);

DROP TABLE IF EXISTS `luu_anh`;
CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1,	1,	'2023-04-08 10:44:04'),
(1,	2,	'2023-04-08 10:44:04'),
(1,	3,	'2023-04-08 10:44:04'),
(2,	1,	'2023-04-08 10:44:04'),
(2,	2,	'2023-04-08 10:44:04'),
(2,	3,	'2023-04-08 10:44:04'),
(3,	1,	'2023-04-08 10:44:04'),
(3,	2,	'2023-04-08 10:44:04');

DROP TABLE IF EXISTS `nguoi_dung`;
CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `mat_khau` varchar(100) NOT NULL,
  `ho_ten` varchar(50) NOT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(100) DEFAULT 'https://picsum.photos/200',
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1,	'ankakasi112@gmail.com',	'$2b$10$6QYmi5qOZ9BECjyFgMx6ROnsa/AQZhNrYAD3zS6tknqvzRQuuvMJm',	'Trần Mỹ Phú An',	23,	'https://picsum.photos/200'),
(2,	'b@gmail.com',	'1234',	'Lê Văn Bé',	19,	'https://picsum.photos/200'),
(3,	'c@gmail.com',	'1234',	'Trần Văn c',	1,	'https://picsum.photos/200'),
(4,	'd@gmail.com',	'1234',	'Trần Văn d',	20,	'https://picsum.photos/200'),
(5,	'e@gmail.com',	'1234',	'Trần Văn e',	19,	'https://picsum.photos/200'),
(6,	'f@gmail.com',	'1234',	'Trần Văn f',	21,	'https://picsum.photos/200'),
(7,	'g@gmail.com',	'1234',	'Trần Văn g',	33,	'https://picsum.photos/200'),
(8,	'h@gmail.com',	'1234',	'Trần Văn h',	31,	'https://picsum.photos/200'),
(9,	'i@gmail.com',	'1234',	'Trần Văn i',	19,	'https://picsum.photos/200'),
(10,	'j@gmail.com',	'1234',	'Trần Văn j',	23,	'https://picsum.photos/200');

-- 2023-04-08 10:44:34
