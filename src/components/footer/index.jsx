import React from "react";
import DrawerComponent from "../drawers";
import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-company">
          <div className="footer-qa mobile">
            <p className="footer-title hideOnMobile">TIX</p>
            <div className="footer-qaContentOne footer-6 hideOnMobile">
              <a href="#">FAQ</a>
              <a href="#">Brand Guidelines</a>
            </div>
            <div className="footer-qaContentTwo footer-6 mobile-first">
              <a href="#">Thỏa thuận sử dụng</a>
              <a href="#">Chính sách bảo mật</a>
            </div>
          </div>
          <div className="footer-partner hideOnMobile">
            <p className="footer-title">ĐỐI TÁC</p>
            <div className="footer-partnerCompany footer-12 linePartner">
              <a href="https://www.cgv.vn/" target="_blank">
                <img src="https://i.ibb.co/cghdcpR/cgv.png" alt="cgv" />
              </a>
              <a href="https://www.bhdstar.vn/" target="_blank">
                <img src="https://i.ibb.co/qBmBzFT/bhd.png" alt="bhd" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/2NF0QSh/galaxycine.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/xqYrb6F/cinestar.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://i.ibb.co/dmmhKmk/404b8c4b80d77732e7426cdb7e24be20.png"
                  alt="cgv"
                />
              </a>
            </div>
            <div className="footer-partnerCompany footer-12 linePartner">
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/XV0nFkf/megags.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/61t5wVz/bt.jpg" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://i.ibb.co/njXL22W/dongdacinema.png"
                  alt="cgv"
                />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/wM5xmDr/TOUCH.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/nfNHgGG/cnx.jpg" alt="cgv" />
              </a>
            </div>
            <div className="footer-partnerCompany footer-12 linePartner">
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/YX4JhdG/STARLIGHT.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/WfN5NWt/dcine.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://i.ibb.co/44ksrBw/zalopay-icon.png"
                  alt="cgv"
                />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/7Yg1HN9/payoo.jpg" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/Jm39NdG/VCB.png" alt="cgv" />
              </a>
            </div>
            <div className="footer-partnerCompany footer-12 linePartner">
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/CM8mdzg/AGRIBANK.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/rvCcng5/VIETTINBANK.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/Hd35Wb5/IVB.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/6W6yxd8/123go.png" alt="cgv" />
              </a>
              <a href="#" target="_blank">
                <img src="https://i.ibb.co/C76DZYH/laban.png" alt="cgv" />
              </a>
            </div>
          </div>
          <div className="footer-social">
            <div className="f-app  hideOnMobile">
              <p className="footer-title title-center">MOBILE APP</p>
              <a href="#">
                <img
                  src="https://i.ibb.co/5kpYbrM/android-logo.png"
                  alt="android-logo"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.ibb.co/S38zcVY/apple-logo.png"
                  alt="apple-logo"
                />
              </a>
            </div>
            <div className="f-social">
              <p className="footer-title title-center hideOnMobile">SOCIAL</p>
              <a href="#">
                <img
                  src="https://i.ibb.co/RpWk8hy/facebook-logo.png"
                  alt="facebook-logo"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.ibb.co/QPg3J3g/zalo-logo.png"
                  alt="zalo-logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-imageLogo">
            <img src="https://i.ibb.co/B2kGbQZ/zion-logo.jpg" alt="zion-logo" />
          </div>
          <div className="footer-content">
            <span className="footer-title">
              TIX - sản phẩm cuối khóa Front-End [CYBERSOFT-ACADEMY]
            </span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </span>
            <span>Số Điện Thoại (Hotline): 1900 545 436</span>
            <span>Email: support@tix.vn</span>
          </div>
          <div className="footer-cer">
            <a href="#">
              <img
                src="https://i.ibb.co/pxnzvrf/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="d1e6bd560daa9e20131ea8a0f62e87f8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
