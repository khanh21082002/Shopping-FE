import React from "react";
import {
  FacebookFilled,
  TwitchFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="mt-4 bg-[#252b33] pt-5 text-white">
      <div className="mb-10 border-b-[0.5px] border-[#38414d] pb-4 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <FooterPolicyItem
            imgSrc="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer_policy_img_1.png?1705392652885"
            alt="Đặt online giao tận nhà đúng giờ"
            text="Đặt online giao tận nhà đúng giờ"
          />
          <FooterPolicyItem
            imgSrc="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer_policy_img_2.png?1705392652885"
            alt="Đổi trả sản phẩm trong 7 ngày"
            text="Đổi trả sản phẩm trong 7 ngày"
          />
          <FooterPolicyItem
            imgSrc="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer_policy_img_3.png?1705392652885"
            alt="Sản phẩm sạch tại vườn"
            text="Sản phẩm sạch tại vườn"
          />
        </div>
      </div>

      <div className="mb-2  pb-4 ">
        <div className="mx-auto flex max-w-7xl justify-between">
          <div className="sm:w-1/2 lg:w-1/4 py-2 mr-6">
            <img
              src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer-logo.png?1705392652885"
              alt="Wolf Food"
              className="mb-4 h-[42px] w-[238px]"
            />
            <div className="mb-4 flex items-center">
              <img
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer-address.png?1705392652885"
                alt="Wolf Food"
                className="mr-2 h-6 w-6"
              />
              <span>Số 16 Phan Văn Trường - Phường 15 - Cầu Giấy - TP Hà Nội</span>
            </div>
            <div className="text-sm text-[#96AAC3]">
              <p>Thứ 2 - Thứ 6: 8:00-17:00</p>
              <p>Thứ 7: 8:00 – 12:00</p>
            </div>
          </div>
          <div className="py-2 sm:w-1/2 lg:w-1/4 mr-6">
            <h4 className="mb-5 text-[18px] font-semibold text-[#fff]">
              Hỗ trợ khách hàng
            </h4>
            <div className="mb-4 flex items-center border-b-[0.5px] border-[#38414d] pl-2">
              <img
                width="24"
                height="24"
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer-phone.png?1705392652885"
                data-src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer-phone.png?1705392652885"
                alt="Wolf Food"
                className="lazy loaded"
                data-was-processed="true"
              />
              <div className=" mb-2 ml-2 flex flex-col">
                <a
                  href="tel:19006750"
                  title="19006750"
                  className="text-[18px] text-[#fff] hover:text-[#20c997] "
                >
                  1900 6750
                </a>
                <span className="text-[#96AAC3]">
                  Thứ 2 - Thứ 7: 8:00 - 21:30
                </span>
              </div>
            </div>
            <div className="footer-email">
              <img
                width="24"
                height="24"
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer-email.png?1705392652885"
                data-src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/footer-email.png?1705392652885"
                alt="Wolf Food"
                className="lazy loaded"
                data-was-processed="true"
              />
              <a
                href="mailto:support@sapo.vn"
                title="support@sapo.vn"
                className="text-[#fff] hover:text-[#20c997] "
              >
                support@sapo.vn
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-[#96AAC3]">
              <a
                href="/"
                target="_blank"
                aria-label="Facebook"
                title="Theo dõi Wolf Food trên Facebook"
              >
                <div className="text-white hover:text-[#20c997]">
                  <FacebookFilled style={{ fontSize: "24px" }} />
                </div>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="Twitter"
                title="Theo dõi Wolf Food trên Twitter"
              >
                <div className="text-white hover:text-[#20c997]">
                  <TwitchFilled style={{ fontSize: "24px" }} />
                </div>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="Twitter"
                title="Theo dõi Wolf Food trên Instagram"
              >
                <div className="text-white hover:text-[#20c997]">
                  <InstagramFilled style={{ fontSize: "24px" }} />
                </div>
              </a>
            </div>
          </div>
          <div className="py-2 sm:w-1/2 lg:w-1/4 mr-6">
            <h4 className=" mb-5 text-[18px] font-semibold text-[#fff]">Danh mục</h4>
            <div className="">
              <MenuItem
                href="/thit-ca-trung-rau"
                title="Thịt, cá, trứng, rau"
              />
              <MenuItem href="/hang-dong-mat" title="Hàng đông mát" />
              <MenuItem href="/mi-mien-chao-pho" title="Mì, miến, cháo, phở" />
              <MenuItem href="/gao-bot-do-kho" title="Gạo, bột, đồ khô" />
              <MenuItem
                href="/dau-an-nuoc-cham-gia-vi"
                title="Dầu ăn, nước chấm, gia vị"
              />
              <MenuItem href="/sua-cac-loai" title="Sữa các loại" />
              <MenuItem href="/do-uong-cac-loai" title="Đồ uống các loại" />
              <MenuItem href="/banh-keo-cac-loai" title="Bánh kẹo các loại" />
            </div>
          </div>
          <div className="py-2 sm:w-1/2 lg:w-1/4 mr-6">
          <h4 className=" mb-5 text-[18px] font-semibold text-[#fff]">Mục ẩm thực</h4>
            <div className="">
              <MenuItem
                href="/thit-ca-trung-rau"
                title="Thịt, cá, trứng, rau"
              />
              <MenuItem href="/hang-dong-mat" title="Hàng đông mát" />
              <MenuItem href="/mi-mien-chao-pho" title="Mì, miến, cháo, phở" />
              <MenuItem href="/gao-bot-do-kho" title="Gạo, bột, đồ khô" />
              <MenuItem
                href="/dau-an-nuoc-cham-gia-vi"
                title="Dầu ăn, nước chấm, gia vị"
              />
              <MenuItem href="/sua-cac-loai" title="Sữa các loại" />
              <MenuItem href="/do-uong-cac-loai" title="Đồ uống các loại" />
              <MenuItem href="/banh-keo-cac-loai" title="Bánh kẹo các loại" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#333] text-center py-3">
        <span>
          © Bản quyền thuộc về <b>Wolf Themes</b> | Cung cấp bởi{" "}
          <a
            href="https://www.sapo.vn/?utm_campaign=cpn:kho_theme-plm:footer&amp;utm_source=Tu_nhien&amp;utm_medium=referral&amp;utm_content=fm:text_link-km:-sz:&amp;utm_term=&amp;campaign=kho_theme-sapo"
            title="Sapo"
            target="_blank"
            rel="nofollow"
          >
            Sapo
          </a>
        </span>
        <div className="back-to-top show text-center" title="Lên đầu trang">
          {/* Back to top icon */}
        </div>
      </div>
    </footer>
  );
};

const FooterPolicyItem = ({ imgSrc, alt, text }) => (
  <div className="sm:w-1/2 lg:w-1/4">
    <div className="flex items-center">
      <img src={imgSrc} alt={alt} width={35} height={35} />
      {text}
    </div>
  </div>
);

const MenuItem = ({ href, title }) => {
  return (
    <a href={href} title={title} className="block py-1 text-white hover:text-[#20c997]" rel="nofollow" >
      {title}
    </a>
  );
};

export default Footer;
