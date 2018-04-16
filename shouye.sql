/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1801

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-15 20:35:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `bfprice` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `cont` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('1', 'img/dfn1.png', '259.00', '28.00', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-10 11:26:21');
INSERT INTO `shouye` VALUES ('2', 'img/dfn2.png', '259.00', '29.00', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-10 11:37:31');
INSERT INTO `shouye` VALUES ('3', 'img/dfn3.png', '369.00', '25.00', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-10 11:38:48');
INSERT INTO `shouye` VALUES ('4', 'img/dfn4.png', '299.00', '29.00', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-10 11:41:54');
SET FOREIGN_KEY_CHECKS=1;
