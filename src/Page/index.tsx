/*
 * @Author: wyy
 * @Date: 2022-11-15 19:48:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-12 16:07:04
 * @FilePath: \qince-master\src\pages\ComboManage\components\Page\index.tsx
 * @Description:
 */
import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Query from './Query';
import Content from './Content';
Page.Content = Content;
Page.Query = Query;
Page.Header = Header;
Page.Footer = Footer;
export default Page;
