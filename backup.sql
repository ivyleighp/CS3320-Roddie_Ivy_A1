-- MySQL dump 10.13  Distrib 5.7.22, for Win64 (x86_64)
--
-- Host: localhost    Database: cs3320
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientinformation`
--

DROP TABLE IF EXISTS `clientinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientinformation` (
  `clientId` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zipCode` varchar(10) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`clientId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientinformation`
--

LOCK TABLES `clientinformation` WRITE;
/*!40000 ALTER TABLE `clientinformation` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientinformation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuelquote`
--

DROP TABLE IF EXISTS `fuelquote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fuelquote` (
  `quoteId` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL,
  `gallonsRequested` double DEFAULT NULL,
  `requestDate` datetime DEFAULT NULL,
  `deliveryDate` datetime DEFAULT NULL,
  `deliveryAddress` varchar(255) NOT NULL,
  `deliveryCity` varchar(100) NOT NULL,
  `deliveryState` varchar(2) NOT NULL,
  `deliveryZipCode` varchar(10) NOT NULL,
  `deliveryContactName` varchar(255) NOT NULL,
  `deliveryContactPhone` varchar(10) NOT NULL,
  `deliveryContactEmail` varchar(255) NOT NULL,
  `suggestedPrice` double DEFAULT NULL,
  `totalAmountDue` double DEFAULT NULL,
  PRIMARY KEY (`quoteId`),
  KEY `FK_clientId` (`clientId`),
  CONSTRAINT `FK_clientId` FOREIGN KEY (`clientId`) REFERENCES `clientinformation` (`clientId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuelquote`
--

LOCK TABLES `fuelquote` WRITE;
/*!40000 ALTER TABLE `fuelquote` DISABLE KEYS */;
/*!40000 ALTER TABLE `fuelquote` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-30 15:12:16
