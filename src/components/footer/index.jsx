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
          <div className="footer-social"></div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
