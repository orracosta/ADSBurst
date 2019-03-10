/*
 Navicat Premium Data Transfer

 Source Server         : cPanel
 Source Server Type    : MySQL
 Source Server Version : 50639
 Source Host           : server01.mania.gg:3306
 Source Schema         : mania_iplezier

 Target Server Type    : MySQL
 Target Server Version : 50639
 File Encoding         : 65001

 Date: 26/06/2018 15:38:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for iplezier
-- ----------------------------
DROP TABLE IF EXISTS `iplezier`;
CREATE TABLE `iplezier`  (
  `ipclick` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `timeclick` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `tipo` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Event structure for DELETE IP
-- ----------------------------
DROP EVENT IF EXISTS `DELETE IP`;
delimiter ;;
CREATE DEFINER = `mania_dbip`@`%` EVENT `DELETE IP`
ON SCHEDULE
EVERY '1' HOUR STARTS '2018-06-03 08:03:39'
ON COMPLETION PRESERVE
DO DELETE FROM iplezier WHERE timeclick < UNIX_TIMESTAMP() * 1000
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
