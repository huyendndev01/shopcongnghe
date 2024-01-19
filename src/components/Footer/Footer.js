import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 h-72 mt-3 shadow-inner p-3">
      <div className="col-span-1">
        <div className="text-footer pb-3 border-b border-[#81757557]">
          THÔNG TIN LIÊN HỆ
        </div>
        <div className="mt-5">
          <div className="space-y-2 text-md">
            <h3 className="font-bold">Hà Nội</h3>
            <p>
              <i className="fa-solid fa-location-dot mr-2"></i>Số 2 Ngõ 161 Thái
              Hà, Q. Đống Đa
            </p>
            <p>
              <i className="fa-solid fa-phone-volume mr-2"></i>Hotline:
              0944.636.000
            </p>
          </div>
          <div className="space-y-2 mt-3 text-md">
            <h3 className="font-bold">Hồ Chí Minh</h3>
            <p>
              <i className="fa-solid fa-location-dot mr-2"></i>Số 367B Lê Hồng
              Phong, P.2, Quận10
            </p>
            <p>
              <i className="fa-solid fa-phone-volume mr-2"></i>
              Hotline: 0981.995.991
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="text-footer pb-3 border-b border-[#81757557]">
          VỀ CHÚNG TÔI
        </div>
        <ul className="space-y-2 mt-5">
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Tin tức
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Tuyển dụng
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Dịch vụ
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Dạy nghề
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500" to="">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <div className="text-footer pb-3 border-b border-[#81757557]">
          CHÍNH SÁCH CHUNG
        </div>
        <ul className="space-y-2 mt-5">
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Chính sách bảo hành
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Chính sách thanh toán
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Chính sách bảo mật
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Chính sách vận chuyển
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500 hover:text-red-600" to="">
              Chính sách đổi trả
            </Link>
          </li>
          <li>
            <Link className="text-cyan-500" to="">
              Chính sách xử lý khiếu nại
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <div className="text-footer pb-3 border-b border-[#81757557] mb-5">
          THANH TOÁN
        </div>
        <h3>Chứng nhận: </h3>
        <div className="flex justify-between items-center w-[80%] mt-3">
          <img src="https://shopcongnghe.com.vn/wp-content/uploads/thonbao-bct.jpg" />
          <img src="https://shopcongnghe.com.vn/wp-content/uploads/chung-nhan-1.jpg" />
          <img src="https://shopcongnghe.com.vn/wp-content/uploads/dmca.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
