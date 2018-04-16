/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1801

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-15 20:36:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `bfprice` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(6) NOT NULL DEFAULT '1',
  `cont` varchar(255) NOT NULL,
  `reg_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../img/list1.jpg', '469.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:08');
INSERT INTO `list` VALUES ('2', '../img/list2.jpg', '439.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:13');
INSERT INTO `list` VALUES ('3', '../img/list3.jpg', '299.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:20');
INSERT INTO `list` VALUES ('6', '../img/list6.jpg', '299.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:23');
INSERT INTO `list` VALUES ('7', '../img/list7.jpg', '259.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:26');
INSERT INTO `list` VALUES ('8', '../img/list8.jpg', '322.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:29');
INSERT INTO `list` VALUES ('9', '../img/list9.jpg', '599.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:32');
INSERT INTO `list` VALUES ('10', '../img/list10.jpg', '359.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:36');
INSERT INTO `list` VALUES ('11', '../img/list11.jpg', '469.00', '55.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:40');
INSERT INTO `list` VALUES ('12', '../img/list12.jpg', '999.00', '49.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:43');
INSERT INTO `list` VALUES ('13', '../img/list13.jpg', '299.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:45');
INSERT INTO `list` VALUES ('14', '../img/list14.jpg', '699.00', '55.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:48');
INSERT INTO `list` VALUES ('15', '../img/list15.jpg', '899.00', '35.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:50');
INSERT INTO `list` VALUES ('16', '../img/list16.jpg', '899.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:53');
INSERT INTO `list` VALUES ('17', '../img/list17.jpg', '469.00', '49.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:55');
INSERT INTO `list` VALUES ('18', '../img/list18.jpg', '199.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:41:58');
INSERT INTO `list` VALUES ('19', '../img/list19.jpg', '399.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:02');
INSERT INTO `list` VALUES ('20', '../img/list20.jpg', '330.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:04');
INSERT INTO `list` VALUES ('22', '../img/list22.jpg', '259.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:06');
INSERT INTO `list` VALUES ('23', '../img/list23.jpg', '439.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:09');
INSERT INTO `list` VALUES ('24', '../img/list24.jpg', '139.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:14');
INSERT INTO `list` VALUES ('25', '../img/list25.jpg', '699.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:19');
INSERT INTO `list` VALUES ('26', '../img/list26.jpg', '699.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:21');
INSERT INTO `list` VALUES ('27', '../img/list27.jpg', '499.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:23');
INSERT INTO `list` VALUES ('28', '../img/list28.jpg', '379.00', '39.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:27');
INSERT INTO `list` VALUES ('4', '../img/list4.jpg', '179.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:31');
INSERT INTO `list` VALUES ('5', '../img/list5.jpg', '469.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:35');
INSERT INTO `list` VALUES ('21', '../img/list21.jpg', '599.00', '69.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-11 10:42:41');
INSERT INTO `list` VALUES ('29', '../img/dfn1.png', '259.00', '28.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-14 17:59:34');
INSERT INTO `list` VALUES ('30', '../img/dfn2.png', '259.00', '29.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-14 18:00:38');
INSERT INTO `list` VALUES ('31', '../img/dfn3.png', '396.00', '25.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-14 18:01:22');
INSERT INTO `list` VALUES ('32', '../img/dfn4.png', '299.00', '29.00', '1', ' Daphne/达芙妮欧美风时尚舒适布洛克鞋圆头透气网布休闲女鞋', '2018-04-14 18:02:22');
SET FOREIGN_KEY_CHECKS=1;
