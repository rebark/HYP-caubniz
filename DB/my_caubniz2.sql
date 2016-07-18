-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 18, 2016 alle 11:20
-- Versione del server: 5.6.29-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_caubniz2`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Assistance Service`
--

CREATE TABLE IF NOT EXISTS `Assistance Service` (
  `id_assistance_service` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `subcategory` varchar(100) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `active_in_dropdown` tinyint(1) NOT NULL,
  `highlight` tinyint(1) NOT NULL,
  `highlight_description` text NOT NULL,
  PRIMARY KEY (`id_assistance_service`),
  UNIQUE KEY `ID Assistance Service` (`id_assistance_service`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dump dei dati per la tabella `Assistance Service`
--

INSERT INTO `Assistance Service` (`id_assistance_service`, `name`, `description`, `image`, `category`, `subcategory`, `active`, `active_in_dropdown`, `highlight`, `highlight_description`) VALUES
(1, 'TIM Modem Adsl Wi-Fi', 'The ADSL2 + Wi - Fi N - DA2210 allows connection to the Internet up to 20 Megabits. <br><br>\nIt''s equipped with a USB Master port to connect and share, in your network, printers, hard drives or flash drives. The modem is compatible with Windows XP and next versions, Mac OS 10.5 and next versions, and Linux. <br><br>\nAfter the first start, according to the subscribed services, it is configured automatically for proper operation.<br><br>\nYou can read the detailed technical specifications of this device by clicking the button below. </br>', 'img/AS/ModemAdsl.jpeg', 'Technical Support', 'Adsl & Fibre', 1, 1, 0, 'Discover all the functionalities of the modem and read FAQs about this item.'),
(12, 'Decoder for TIMvision', 'By connecting the decoder TIMvision to an ADSL line / FIBER TIM or another operator, you will see: <br><br>\n\n<ul><li>The numerous TIMvisionTV titles included in the subscription: the best cinema, full seasons of the most famous TV series, cartoons, documentaries, reportages, music and much more. The most recent film titles and the great successes of the past to rent / buy without having to leave home. </li><br><br>\n\n<li>The best of the web TV available free of charge: every week more than 1,500 titles organized into thematic sections covering the different user interests. In addition, the programs broadcasted the latest week on La7 and the archive of La7 and MTV programs.</li> <br><br>\n\n<li>FreeToAir TV Programs on Digital Terrestrial. </li><br><br>\n\n<li>The photographs and videos uploaded to USB external media or on devices that support the DLNA / UpNP standard connected to a local network.</li><br><br>\n\n<li>You can read the technical specifications of TIM Decoder TIMvision by clicking the button below.</li></ul>', 'img/AS/decoder4.jpg', 'Smart Life', 'TIMvision', 0, 1, 1, 'Discover all the functionalities of the decoder and read all the FAQs about it.'),
(2, 'Fibre modem', '', '', 'Technical Support', 'Adsl & Fibre', 0, 0, 0, ''),
(3, 'First installation', '', '', 'Technical Support', 'Adsl & Fibre', 0, 0, 0, ''),
(4, 'Powerline Adapter', '', '', 'Technical Support', 'Adsl & Fibre', 0, 0, 0, ''),
(5, 'Alignment speed of modem', '', '', 'Technical Support', 'Adsl & Fibre', 0, 0, 0, ''),
(6, 'Internet connection problems', '', 'img/AS/internetconnection2.jpg', 'Technical Support', 'PC & Networking', 0, 0, 1, 'Does your connection is slow? Do you get disconnected often? Here you can read what to do.'),
(7, 'TIMsky', '', '', 'Technical Support', 'Decoder & TV', 0, 0, 0, ''),
(8, 'Configure online your device', '', 'img/AS/configuredevices.png', 'Technical Support', 'Smartphone & Tablet', 0, 0, 1, 'Write the brand and model of your tablet, smartphone or PC and follow the instructions for configuring it.'),
(9, 'Configure mail on PC', '', '', 'Technical Support', 'Mail', 0, 0, 0, ''),
(10, 'Call and reception problems', '', 'img/AS/calling.jpeg', 'Technical Support', 'Telephone Line', 0, 0, 1, 'Couldn''t you call or receive or do both? Does your line is noisy? Here you can read how to solve your problems.'),
(11, 'How to subscribe to TIMvision', '', '', 'Smart Life', 'TIMvision', 0, 0, 0, ''),
(13, 'Smartphone and Tablet for TIMvision', 'The TIMvision application is available on the main APP Store and allows you to see the best of movies, TV series, cartoons, TV TIMvision. The subscription allows you to watch all the contents of the section "TIMvision TV".</br></br>\r\n\r\nYou can watch TIMvision anytime, anywhere: on Smart TV, PC, Smartphone and Tablet, using the credentials chosen at registration. You can also access the Videostore, a constantly updated catalog with the latest blockbusters from rent and purchase at any time.</br></br>\r\n\r\nTIMvision Mobile plans to offer content that can vary from other devices depending on the availability of rights acquired by Telecom Italy for that platform.</br></br>\r\n\r\nCustomers with Smartphone or Tablet Android can download the app from Google Play Store TIMvision.</br></br>\r\n\r\nCustomers with iPhone or iPad can access the TIMvision application downloading it from the Apple Store. Customers with Windows Phone 8 Smartphone or tablet can download the app from the Windows Store.</br></br>\r\n\r\nThe application is compatible with iPhone, iPod touch, iPad, iPad Mini, iPhone 5, iPhone 5S, iPhone 5C. It Requires iOS 5.0 or later.\r\nThe application is compatible with Android 2.3 software and later with screens smaller than 3.5 "and with Windows Phone 8 software, Windows Phone 8 RT and Windows Phone 7.8.</br></br>', 'img/AS/tim_vision_smartphone.png', 'Smart Life', 'TIMvision', 1, 1, 0, ''),
(14, 'Registration to TIMvision', '', '', 'Smart Life', 'TIMvision', 0, 0, 0, ''),
(15, 'Username and password recovery', '', '', 'Smart Life', 'TIMvision', 0, 0, 0, ''),
(16, 'Parental control', '', '', 'Smart Life', 'TIMvision', 0, 0, 0, ''),
(17, 'How to subscribe to TIMreading', '', '', 'Smart Life', 'TIMreading', 0, 0, 0, ''),
(18, 'How to subscribe to TIMmusic', '', '', 'Smart Life', 'TIMmusic', 0, 0, 0, ''),
(19, 'How to subscribe to TIMgames', '', '', 'Smart Life', 'TIMgames', 0, 0, 0, '');

-- --------------------------------------------------------

--
-- Struttura della tabella `Assistance Subcategory`
--

CREATE TABLE IF NOT EXISTS `Assistance Subcategory` (
  `Name` varchar(200) NOT NULL,
  `Image` text NOT NULL,
  `Short_Description` text NOT NULL,
  `Active` tinyint(1) NOT NULL,
  PRIMARY KEY (`Name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Assistance Subcategory`
--

INSERT INTO `Assistance Subcategory` (`Name`, `Image`, `Short_Description`, `Active`) VALUES
('Adsl & Fibre', 'img/AS/adslfibre.png', 'Discover the functionalities of the TIM ADSL or Fibre modem, read about problems of installation and speed of connection.', 1),
('Smartphone & Tablet', 'img/AS/smartphonetablet.png', 'Learn about configuring online your device, discover the technical assistance with SOS smartphone and much more.', 0),
('Telephone Line', 'img/AS/telephone.png', 'Read about problems of calling and reception of the signal and learn about the call forwarding and call waiting service.', 0),
('Mail', 'img/AS/mail.png', 'Learn about configuring the mail for your PC or Smartphone and read FAQs about errors in sending and delivery of messages.', 0),
('PC & Networking', 'img/AS/pc.png', 'Read about internet connection problems and learn about browser and DNS configuring and about secure navigation on your PC.', 0),
('Decoder & TV', 'img/AS/tv.png', 'Discover the functionalities of TIMsky, Netflix and Premium Online and read FAQs about common problems.', 0),
('TIMgames', 'img/AS/timgameslogo2.jpg', 'TIMgames is the TIM service dedicated to gaming that enables all customers to download on tablet and smartphone with the best games on demand and subscription to the mobile world.\nWith TIMgames you will have access to a library of over 1,500 games, updated every week with new titles and games on offer in the area of the store promotions.', 0),
('TIMmusic', 'img/AS/timmusiclogo2.jpg', 'TIMmusic is the TIM music streaming service that lets you listen to millions of songs streaming with no time limit on Smartphone and Tablet WITHOUT CONSUMING GIGA, or PC. You can create your own playlists or listen to those suggested by famous DJs and artists and share all your favorite social network.', 0),
('TIMreading', 'img/AS/timreadinglogo2.jpg', 'TIMreading is the TIM Store that allows you to purchase and read books, newspapers and magazine on PC, Tablet and Smartphone. The content available on the store are: 11 national and sports newspapers, over 50 Magazine in single copy or subscription and over 75,000 e-books of all genres.', 0),
('TIMvision', 'img/AS/timvisionlogo2.jpg', 'TIMvision is the new answer to the entertainment needs for all the family. The TV is entirely on demand via an unlimited ADSL connection or Fiber and allows you to enjoy thousands of titles: the great cinema, the most exciting TV series, the most loved cartoon characters and more!', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `Device`
--

CREATE TABLE IF NOT EXISTS `Device` (
  `ID_Device` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) NOT NULL,
  `Type` varchar(100) NOT NULL COMMENT '{PC, Smartphone,Smartphone&Telephone,Tablet, TV, Telephone, Modem, Key, Decoder}',
  `FrontImage` text NOT NULL,
  `BackImage` text NOT NULL,
  `SideImage` text NOT NULL,
  `Price` float NOT NULL,
  `Discount` float NOT NULL,
  `Brand` varchar(150) NOT NULL,
  `Display` float DEFAULT NULL,
  `Operative_System` varchar(150) DEFAULT NULL,
  `Active` tinyint(4) NOT NULL DEFAULT '0',
  `SL_Service` int(11) NOT NULL DEFAULT '0',
  `Assistance` int(11) NOT NULL DEFAULT '0',
  `Features` text NOT NULL,
  `Description` text NOT NULL,
  `DescArg1` text NOT NULL,
  `DescArg2` text NOT NULL,
  `DescArg3` text NOT NULL,
  `DescArg4` text NOT NULL,
  `DescArg5` text NOT NULL,
  `DescArg6` text NOT NULL,
  `Description1` text NOT NULL,
  `Description2` text NOT NULL,
  `Description3` text NOT NULL,
  `Description4` text NOT NULL,
  `Description5` text NOT NULL,
  `Description6` text NOT NULL,
  `DescriptionChar` text NOT NULL,
  PRIMARY KEY (`ID_Device`),
  UNIQUE KEY `ID Device` (`ID_Device`),
  FULLTEXT KEY `Description` (`Description`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dump dei dati per la tabella `Device`
--

INSERT INTO `Device` (`ID_Device`, `Name`, `Type`, `FrontImage`, `BackImage`, `SideImage`, `Price`, `Discount`, `Brand`, `Display`, `Operative_System`, `Active`, `SL_Service`, `Assistance`, `Features`, `Description`, `DescArg1`, `DescArg2`, `DescArg3`, `DescArg4`, `DescArg5`, `DescArg6`, `Description1`, `Description2`, `Description3`, `Description4`, `Description5`, `Description6`, `DescriptionChar`) VALUES
(1, 'Huawei P9 Plus', 'Smartphone', 'img/DEV/huawei_P9_front.jpg', 'img/DEV/huawei_P9_back.jpg', 'img/DEV/huawei_P9_dx.jpg', 749.9, 0.9, 'Huawei', 5.5, 'Android', 1, 2, 1, '<ul><br><li>4GPLUS</li>\r\n<li>Android 6.0</li>\r\n<li>Display Retina HD 5,5"</li>\r\n<li>ISight Camera 12 MegaPixels, Flash</li>\r\n<li>NFC</li>\r\n</ul>', 'Display <br>\r\nOperative System<br>\r\nProcessor<br>\r\nVideo recording<br>\r\nCamera <br>\r\nSensor <br>\r\n', 'Display ', 'Operative System', 'Processor', 'Video recording', 'Camera', 'Sensor ', 'Retina HD 5,5" with 1920 x 1080 px screen resolution', 'Android 6.0', 'Processor Kirin 955 - Octa-Core (4x2,5 GHz + 4x1,8 GHz)', 'HD a 1080p e 60 fps, moviola a 240 fps', 'ISight Camera 12 MegaPixels, Flash,True Tones, Live Photos', 'NFC', 'Retina HD 5,5" with 1920 x 1080 px screen resolution<br>\r\nAndroid 6.0<br>\r\nProcessor Kirin 955 - Octa-Core (4x2,5 GHz + 4x1,8 GHz)<br>\r\nHD a 1080p e 60 fps, moviola a 240 fps<br>\r\nISight Camera 12 MegaPixels, Flash,True Tones, Live Photos<br>\r\nNFC<br>\r\n'),
(2, 'Samsung Galaxy A5', 'Smartphone', 'img/DEV/Galaxy_A5.png', '', '', 429.9, 1, 'Samsung', 5, 'Android', 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, 'BlackBerry   PRIV', 'Smartphone', 'img/DEV/Black_Berry.png', '', '', 849.9, 0.9, 'BlackBerry', 5.5, 'Android', 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, 'Microsoft Lumia 650', 'Smartphone', 'img/DEV/LUMIA_650.jpg', '', '', 239.9, 1, 'Microsoft', 5, 'Windows Phone', 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, 'Sony XPERIA Z5', 'Smartphone', 'img/DEV/Sony_XPERIA_Z5.png', '', '', 699.9, 1, 'Sony', 5, 'Android', 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, 'Doro Liberto 820 Mini', 'Smartphone', 'img/DEV/Doro.jpg', '', '', 160, 0.7, 'Doro', 4, 'Android', 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, 'TIM Modem ADSL Wi-Fi', 'Modem', 'img/DEV/blocchetto-modem-adsl-new.png', '', '', 69, 0.9, 'Tim', NULL, NULL, 1, 0, 1, '<ul><br>\r\n<li>Faster Broswing</li>\r\n<li>Multiple device connection</li>\r\n<li>Automatic installation</li>\r\n<li>High connection range</li>\r\n</ul>', 'Technology<br>\r\nConnection Speed<br>\r\nWireless protection<br>\r\nAdvanced Functionalities<br>\r\nWifi max range<br>\r\nTech Assistance<br>', 'Technology', 'Connection Speed', 'Wireless protection', 'Advanced Features', 'Wifi max range', 'Tech Assistance', 'ADSL/ADSL2+', 'up to 20MB/s Download 1MB/s Up', 'WPA,WPA-PSK,WEP', 'DHCP server,NAT,NAPT,hard disk and printer sharing', 'up to 60 meters', '2 years Warranty', 'ADSL/ADSL2+<br>\r\nup to 20MB/s Download 1MB/s Up<br>\r\nWPA,WPA-PSK,WEP<br>\r\nDHCP server,NAT,NAPT,hard disk and printer sharing<br>\r\nup to 60 meters<br>\r\n2 years Warranty<br>'),
(8, 'Technicolor Wi-Fi Bridge', 'Modem', 'img/DEV/blocchetto-wifi-bridge-techniclor.png', '', '', 79, 1, 'Technicolor', NULL, NULL, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(9, 'TIM Chiavetta 42.2', 'Modem', 'img/DEV/blocchetto_chiavetta_internet_42.2-1.jpg', '', '', 29, 1, 'Tim', NULL, NULL, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(10, 'TIM Modem 4G WI-FI', 'Modem', 'img/DEV/modem_wifi_4g_230x230.png', '', '', 79.9, 1, 'Tim', NULL, NULL, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(11, 'TIM Modem Wi-Fi Car Pack 4G', 'Modem', 'img/DEV/TIM_Pack_WiFi_Car.png', '', '', 99.9, 1, 'Tim', NULL, NULL, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `Device - Assistance`
--

CREATE TABLE IF NOT EXISTS `Device - Assistance` (
  `id_assistance_service` int(11) NOT NULL,
  `assistance_name` text,
  `id_device` int(11) NOT NULL,
  `single_link` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_assistance_service`,`id_device`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Device - Assistance`
--

INSERT INTO `Device - Assistance` (`id_assistance_service`, `assistance_name`, `id_device`, `single_link`) VALUES
(1, 'Technical Assistance', 7, 1),
(13, 'TIM Vision', 1, 0),
(13, 'TIM Vision', 2, 0),
(13, 'TIM Vision', 3, 0),
(13, 'TIM Vision', 4, 0),
(13, 'TIM Vision', 5, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `Device-SL`
--

CREATE TABLE IF NOT EXISTS `Device-SL` (
  `SL_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  PRIMARY KEY (`SL_id`,`device_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Device-SL`
--

INSERT INTO `Device-SL` (`SL_id`, `device_id`) VALUES
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(15, 1),
(15, 2),
(15, 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `Faq`
--

CREATE TABLE IF NOT EXISTS `Faq` (
  `ID_Faq` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Question` text NOT NULL,
  `Answer` text NOT NULL,
  PRIMARY KEY (`ID_Faq`),
  UNIQUE KEY `ID Faq` (`ID_Faq`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dump dei dati per la tabella `Faq`
--

INSERT INTO `Faq` (`ID_Faq`, `Question`, `Answer`) VALUES
(2, 'I see a red light, what does it mean?', 'If the red light comes from the POWER led, it means that the modem is not working and you should call the technical assistance at number 187. Otherwise if the red light comes from the WIFI led, it means that you are connected on a non-protected WiFi .'),
(8, 'How can I buy it?', 'The TIMvision decoder is included in the TIMvision offer with the decoder available for all clients with Unlimited ADSL & Fiber.'),
(1, 'How can I install the modem?', 'You should read the manual provided to you at the moment of the purchase for the complete installation instructions.'),
(3, 'What does it mean when I see a green blinking light instead of a steady green one?', 'The green blinking light under the DSL led means that the modem is trying to make an ADSL connection. When the light becomes steady, the ADSL connection is active. If the green blinking light it''s under the SERVICE led it means that there is a configuration activity in process.'),
(4, 'How can I set the password for the modem?', 'To increase the security of your modem and Internet connection, you''ll want to set a password to access the Management page.<br>\n\nTo access the web management by modem, open the browser and type the following numerical address: http://192.168.1.1 or http://modemtelecom.<br>\n\nThe first access will be prompted to configure the password for access; if possible, set a password that ensures an adequate level of safety and click Configure to store settings and access the modem management.<br>\n\nTo gain access to the password and then to be able to periodically change, go to the web page of the modem http://192.168.1.1 or http://modemtelecom, then to Basic Settings, and then click Local Access.<br>\n\nTo save any changes, click the Save button.<br>\n\nIn case you do not remember your password to access the modem management, please contact 187.'),
(5, 'What is port mapping?', 'The Port Mapping allows access to local network devices from other systems on the Internet. It is a useful service for the use of applications such as FTP servers, online gaming, mail servers, etc.'),
(6, 'I have got frequent internet connection problems, what can I do?', 'See the Internet connection problems section on this site, reachable from Assistance Services > Technical Support > PC & Networking.'),
(7, 'Which are the advantages of the advanced functionality dynamic DNS?', 'With Dynamic DNS you have a DNS name (for example, miomodem.dyndns.org ) always associated with an IP address even if this changes over time.\nThis feature is useful for getting from the Internet, via a DNS name, one or more services provided by one or more devices connected to the LAN Modem, such as an FTP server or a Web server.'),
(9, 'How can I install the decoder?', 'The installation requires a few simple steps. You can follow the instructions on the TIMvision decoder manual given to you at the moment of the purchase.'),
(10, 'Why do I have to register for the service and how can I do it?', 'The registration for TIMvision is needed to assure safety in the purchases of securities and free viewing on other devices. You can register with a username (email) and password of your choice.\r\nTo complete the registration you will be required to confirm the link in the email sent to the address you provided. Once you connect your set-top box to the network, you can configure a TIMvision account (email and password) from the section Profile / Edit Account. In this way you can use the credentials to access other compatible devices to TIMvision and see the titles included in your subscription.\r\nThese data will always be displayed in the Profile / My Data section.'),
(11, 'Which are the advanced functionalities?', 'The TIMvision decoder allows access to TIM''s TV on demand. All films, TV series, cartoons can be seen on demand mode with start, pause and stop the video. The decoder also supports the functionality of video recording from the time at which it was stopped the last time. It has also advanced functions for the digital terrestrial like the ability to pause for a few minutes of live content. It''s also possible to connect a USB flash drive to view your personal image / video / music.'),
(12, 'How can I find a specific content?', 'TIMvision is equipped with an integrated search engine that lets you search for a channel or a specific content. Use\r\n<ul><li>\r\n"Search" by pressing the red button on the remote TIMvision </li>\r\n<li>" Filter " by pressing the green button on the remote control to activate the search by genre, year, actor etc.</li></ul>\r\nFor the search you can use the alphanumeric screen keyboard. The keyboard is activated or deactivated by pressing the button at the bottom right on the remote control or alternatively you can use the remote control keypad as if it were a mobile phone keypad, pressing repeatedly the same button until the desired letter (for example, to write a letter " C ", press three times the "2" key ) .'),
(13, 'Are there adult only content?', 'Under the "videostore" section there is the Hotzone section with content for adults only  Access is restricted to the insertion of the Parental Control PIN and PIN purchases .'),
(14, 'How much does the app costs and how much I have to pay data traffic?', 'The application download is free. <br><br>\r\n\r\nIf you have an active TIM data offer  and you have chosen the TIMvision subscription, Internet traffic for viewing content is included on TIM Mobile Network 3G / 4G for apn wap.tim.it and ibox.tim.it and PC connected with Stick TIM.<br><br>\r\n\r\nVideostore: the contents are offered for a fee: you can pay by credit card registered on Apple''s iTunes or credit card / phone credit on Android. To know the price you have to select the content of interest.<br><br>\r\n\r\nFreeTV: the contents are free. Use of the application requires an active data connection on the mobile network and on ADSL Wi - Fi. The cost of traffic on TIM mobile network 3G / 4G TIMvision is included in the subscription fee.\r\nThe non TIM customers are subject to the payment of data traffic according to the tariff plan or services associated with the SIM card of your manager.<br><br>'),
(15, 'Does the TIMvision Mobile App works on both Wi - Fi and 3G network?', 'Yes, you can use the application, and the vision of its content in both subscription and pay services, both on Wi - Fi network and 3G with the exception of the TIM Serie A, which can only be used on the mobile network TIM.'),
(16, 'I bought a subscription on Mobile Line access and it''s not recognized', 'If you purchased your subscription at a TIMvision TIM shop or on site timvision.it or tim.it, you can access the content included in your subscription just registering. Sign in with your TIMvision account if you have already registered one, otherwise register. See if your subscription is active under Info & cost / Subscriptions menu. If your subscription is still not active at least 24 hours after activation, call 119, you will probably need to make a reconfiguration of your account.'),
(17, 'I am a customer with landline TIM and TIMvision subscription. How can I see TIMvision on my Tablet / Smartphone?', 'If you have a Smartphone or a Tablet Android or Windows Phone 7/8/RT, or a PC with key, in order to register you have to:<br><br>\r\n<ul><li>\r\nLog in Application and select SETTINGS;</li>\r\n<li>Select LOGIN to use your subscription;</li>\r\n<li>Enter the email address and password of your Alice Mail associated to ADSL TIM;</li>\r\n<li>Go to the home page of the application and enter in the section TIMvision TV.</li></ul>'),
(18, 'Can I see TIMvision on rooted Smartphone/Tablet?', 'TIMvision is not compatible on "rooted " devices because we can not guarantee the correct view . It is an explicit request from the content providers to protect them from illegal distribution.'),
(19, 'If I have another mobile operator, can I subscribe to TIMvision?', 'If you have a non TIM manager tab, you can, after you download the app , buy the TIMvision subscription that allows you to see the contents in the section TIMvision TV with payment by credit card. Also you can buy the contents of Videostore always paying by credit card. The data traffic for the viewing of content, in the case of non-TIM customers, is not included. TIM customers have, however, always the data traffic, for watching any content, always included in your TIMvision.');

-- --------------------------------------------------------

--
-- Struttura della tabella `Faq - Assistance`
--

CREATE TABLE IF NOT EXISTS `Faq - Assistance` (
  `ID_Assistance_Service` int(11) NOT NULL,
  `ID_Faq` int(11) NOT NULL,
  PRIMARY KEY (`ID_Assistance_Service`,`ID_Faq`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Faq - Assistance`
--

INSERT INTO `Faq - Assistance` (`ID_Assistance_Service`, `ID_Faq`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(12, 8),
(12, 9),
(12, 10),
(12, 11),
(12, 12),
(12, 13),
(13, 14),
(13, 15),
(13, 16),
(13, 17),
(13, 18),
(13, 19);

-- --------------------------------------------------------

--
-- Struttura della tabella `Info`
--

CREATE TABLE IF NOT EXISTS `Info` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `image` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Info`
--

INSERT INTO `Info` (`id`, `name`, `description`, `image`) VALUES
(0, 'The evolution in an icon', '<p>To evolve means to improve in order to be able to respond to new challenges. To accommodate the future and be a part of it, TIM renews itself in the brand. Since its foundation, more than 20 years ago , its logo has been a sign of modernity and dynamism: a promise of projects and new horizons. Today it continues to be a symbol of change, combining the expertise of two realities: the red trigram of Telecom Italia, the intense blue of the TIM brand and a T to unite these two worlds. The synthesis of a great legacy and a strong orientation to the future. The result is a simple and direct icon: evolved,  for evolved for times.<p>', 'img/logo_big.png'),
(1, 'responsible leaders', 'Being a leader means having a vision that goes beyond the horizons of knowledge, be role models . We believe in the culture of inclusion, considering the comparison an opportunity and we engange in  encouraging dialogue .', 'img/test/val1.jpg'),
(2, 'we want to grow', 'Always keeping the passion alive, feeding their curiosity with the firm desire to improve is one of our primary commitments: we remain open to the world and forward to the future .', 'img/test/val2.jpg'),
(3, 'we aim for excellence', 'commitement and dedication are essentials elements to develop the highest quality projects, made with the focus on innovation and on the need of our customes', 'img/test/val3.jpg'),
(4, 'we care for our customers', 'We work to allow people to communicate, making their lives easier, rich in opportunities and relationships. All made along a journey of development and mutual enrichment that meets the needs, the aspirations and dreams of our customers ', 'img/test/val4.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `Projects`
--

CREATE TABLE IF NOT EXISTS `Projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `category` varchar(25) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `image` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `Projects`
--

INSERT INTO `Projects` (`id`, `name`, `category`, `short_description`, `image`) VALUES
(1, 'TIM girls hackathon', 'Innovation', 'A hackathon organized by TIM to involve girls on issues related to cyberbullying and gain a greater awareness of the web', 'img/test/1.png'),
(2, 'Sodalitas Socials', 'Environment and social', 'Sodalitas Social Innovation is  an event dedicated to innovative third sector projects. How can componies help to innovate the world of non-profit?', 'img/test/3.jpg'),
(3, 'Junior TIM cup', 'Sport', 'With Junior TIM Cup 30,000 children from all over Italy have already shared the excitement of a great dream', 'img/test/2.jpg'),
(4, 'Festival of Literature', 'Culture', 'Over 150 hours of events featuring big names of fiction, journalism and music', 'img/test/4.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `SL`
--

CREATE TABLE IF NOT EXISTS `SL` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `par_1` varchar(255) DEFAULT NULL,
  `description` text,
  `add_info` text,
  `activation` text,
  `promo` varchar(255) DEFAULT NULL,
  `rules` text,
  `short_description` varchar(255) CHARACTER SET utf8 NOT NULL,
  `image` varchar(50) NOT NULL,
  `image_desc` varchar(25) DEFAULT NULL,
  `category` varchar(25) NOT NULL,
  `subcat` varchar(25) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `subscribe` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dump dei dati per la tabella `SL`
--

INSERT INTO `SL` (`id`, `name`, `subtitle`, `par_1`, `description`, `add_info`, `activation`, `promo`, `rules`, `short_description`, `image`, `image_desc`, `category`, `subcat`, `active`, `subscribe`) VALUES
(6, 'TIM Vision', 'Movies, TV series and cartoons in a single monthly subscription', '<p>TIMVision is the Tv on demand that never leaves you, without ads and on more than one device. View your favourites shows directly on web and TV. It''s also available on smarthphone and tablets without band consuming!</p>', 'More than 8000 titles from movies to tv series, junior shows, music and documentaries available,always on demand and in a single monthly subscription of only 5&euro;/month.', '\r\n', 'The standard subscription price is 5&euro; per month, with the TIM Vision decoder included. If you are a TIMsmart client you can borrow the decoder for 2&euro;/month. In order to access the full catalogue of TIM Vision you need to have a smart TV or connect the included decoder to your TV. If you want you can access all content from your computer, using your favourite browser, or through your smatphones and tablets by downloading our app.', 'Subscribe before 30/06/2016, the first month is free and then 5&euro;/month!', '<p>The customer may request at any time to suspend the subscription for up to 3 times in a calendar year, with discontinuation of the monthly payment from Telecom Italy within 72 hours of request. During the period of suspension we will still be guaranteed the rental and purchase of individual content and the use of free content. The Customer may request the suspension and subsequent reactivation subscription by calling the free Customer Service 187.</p>\r\n', 'Movie, Tv series, cartoons, documentaries and concerts on demand', 'img/SL/1.png', 'img/SL/timvision.png', 'TV & Entertainement', 'Film & TV', 1, 1),
(17, 'Coupons', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Save money on many products and services with your digital coupons', 'img/SL/coupon.png', NULL, 'Person', 'Person', 0, 0),
(18, 'Fidelty Cards', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Save your fidelty card in your TIM Wallet and have them always with you!', 'img/SL/fidelty.png', NULL, 'Person', 'Person', 0, 0),
(5, 'TIM Sky', NULL, NULL, '', NULL, NULL, NULL, NULL, 'The first offer that gives you phone call, internet without limits and SKY without the need of a satellite dish', 'img/SL/2.png', NULL, 'TV & Entertainement', 'Film & TV', 0, 0),
(7, 'TIM Premium Online', NULL, NULL, '', NULL, NULL, NULL, NULL, 'Football, Movie, TV Series and Infinity for 19&euro;/month for all 2016', 'img/SL/3.png', NULL, 'TV & Entertainement', 'Film & TV', 0, 0),
(1, 'Film & TV', NULL, NULL, '', NULL, NULL, NULL, NULL, 'Movies, TV series, cartoons, sport and more', 'img/SL/tv.png', NULL, 'TV & Entertainement', 'yes', 1, 0),
(2, 'TIM Reading', NULL, NULL, '', NULL, NULL, 'All audiobooks for only 1&euro;/week if you subscribe before 31/8/2016', NULL, 'Books, Magazines and Newspapers', 'img/SL/reading.png', NULL, 'TV & Entertainement', 'yes', 0, 0),
(3, 'TIM Music & Games', NULL, NULL, '', NULL, NULL, NULL, NULL, 'All the music and games you need', 'img/SL/musicgames.png', NULL, 'TV & Entertainement', 'yes', 0, 0),
(4, 'Sport', NULL, NULL, '', NULL, NULL, NULL, NULL, 'The best of serie A', 'img/SL/sports.png', NULL, 'TV & Entertainement', 'yes', 0, 0),
(13, 'Netflix', NULL, NULL, '', NULL, NULL, NULL, NULL, 'TV Series and movies starting from 7.99&euro;/month', 'img/SL/4.png', NULL, 'TV & Entertainement', 'Film & TV', 0, 0),
(14, 'Chromecast', NULL, NULL, '', NULL, NULL, NULL, NULL, 'Smartphones and tablets on your TV', 'img/SL/5.png', NULL, 'TV & Entertainement', 'Film & TV', 0, 0),
(15, 'Paymentes', 'available cards', 'With TIM Wallet you can use your smartphone to pay in all authorized shops: it''s secure, fast, simple and practical.', 'Discover TIM Smart Pay, the debit card born from the partneship between Intesa San Paolo and TIM, or choose your favourite credit card from the compatible ones!', '<br/><br/><p>There are many cards you can choose from:</p><ul><li><b>INTESA SANPAOLO: </b> Supeflash, Flash expo, Blu Conctacless Mastercard, Platinum, Flash Visa payWare, Oro Visa </li>\r\n<li><b>MEDIULANUM: </b> Mediulanum Card, freedom easy card </li>\r\n<li><b>UBI BANCA: </b> UBI pay </li>\r\n<li><b>BNL: </b> YourPass-BNL</li></ul>\r\n\r\n', '<p>To be able to use the service you need a TIM card NFC and a compatible smartphone with NFC. Rember to download the app from the store and log in to activate the service, without any addictional cost!</p>', NULL, '<p>To use the payements option just follow these simple steps:<p>\r\n<ul><li>Download the TIM Wallet app from Google Play on your android smartphone</li>\r\n<li>Connect your TIM SmartPAY or add your favourite credit card among the compatible ones</li>\r\n<li>When you need provide payment for your purchase select the card you want, click on "pay" and put your smartphone near the POS conctacless. You will get the notification of the result of your payment on the display of your smartphone</li></ul>', 'Choose Intesa Sanpaolo, UBI or mediulanum credit cards: payment has never been easier!', 'img/SL/credit.png', 'img/SL/card.png', 'Person', 'Person', 1, 0),
(19, 'Transports', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Buy tickets for public trasport in your city, thotugh SMS ticketing service.', 'img/SL/tra.png', NULL, 'Person', 'Person', 0, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `Testimonials`
--

CREATE TABLE IF NOT EXISTS `Testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `quote` varchar(255) NOT NULL,
  `image` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `Testimonials`
--

INSERT INTO `Testimonials` (`id`, `name`, `quote`, `image`) VALUES
(1, 'Tim Berners-Lee', 'When you observe the web it''s like observing the whole of humanity', 'img/test/tim.jpg'),
(2, 'Fabio Fazio', 'You can be anywhere and goeverywhere  with a single click', 'img/test/fazio.jpg'),
(3, 'Pif', 'We hunger for wonder', 'img/test/pif.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
