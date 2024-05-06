import HomePage from "../pages/home/HomePage";
import CollectionPage from "../pages/collections/CollectionPage";
import NotPage from "../pages/notPage/NotPage";
import BlogPage from "../pages/blogs/BlogPage";
import IntroducePage from "../pages/introduce/IntroducePage";
import PhonePage from "../pages/phone/PhonePage";
import CartPage from "../pages/cart/CartPage";

export const routes = [
  {
    name: "Trang chủ",
    path: "/",
    page: HomePage,
    title: "Trang chủ",
    isShowHeader: true,
    isShowFooter: true,
    isSelected: true,
  },
  {
    name: "Sản phẩm",
    path: "/collections/all",
    page: CollectionPage,
    title: "Tất cả sản phẩm",
    isShowHeader: true,
    isShowFooter: true,
    isSelected: false,
  },
  {
    name: "Tin tức",
    path: "/blogs",
    page: BlogPage,
    title: "Tin tức",
    isShowHeader: true,
    isShowFooter: true,
    isSelected: false,
  },
  {
    name: "Giới thiệu",
    path: "/gioi-thieu",
    page: IntroducePage,
    title: "Giới thiệu",
    isShowHeader: true,
    isShowFooter: true,
    isSelected: false,
  },

  {
    name: "Liên hệ",
    path: "/lien-he",
    page: PhonePage,
    title: "Liên hệ",
    isShowHeader: true,
    isShowFooter: true,
    isSelected: false,
  },
  {
    path: "/cart",
    page: CartPage,
    title: "Giỏ hàng",
    isShowHeader: true,
    isShowFooter: true,
    isSelected: false,
  },
  {
    path: "*",
    page: NotPage,
  },
];
