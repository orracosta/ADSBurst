/*
 Navicat Premium Data Transfer

 Source Server         : cPanel
 Source Server Type    : MySQL
 Source Server Version : 50639
 Source Host           : server01.mania.gg:3306
 Source Schema         : mania_dbip

 Target Server Type    : MySQL
 Target Server Version : 50639
 File Encoding         : 65001

 Date: 26/06/2018 15:37:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dbip_lookup
-- ----------------------------
DROP TABLE IF EXISTS `dbip_lookup`;
CREATE TABLE `dbip_lookup`  (
  `addr_type` enum('ipv4','ipv6') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ip_start` varbinary(16) NOT NULL,
  `ip_end` varbinary(16) NOT NULL,
  `country` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stateprov` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `district` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `city` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `zipcode` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `geoname_id` int(11) NULL DEFAULT NULL,
  `timezone_offset` float NOT NULL,
  `timezone_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isp_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `connection_type` enum('dialup','isdn','cable','dsl','fttx','wireless') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `organization_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`addr_type`, `ip_start`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
