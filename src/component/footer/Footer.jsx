import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 max-md:px-5 md:px-20 justify-around z-30 bg-white px-1 pt-20">

            {/* Logo & App Links */}
            <div>
                <img class="btn btn-ghost text-xl py-0 " alt="" src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" />
                <p className="mb-3">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
                <div className="flex md:flex-col xl:flex-row gap-2">
                    <img name="google play" alt="google play" data-original-src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png" loading="lazy" width="156" height="49" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png" />
                    <img name="ios download" alt="ios download" data-original-src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png" loading="lazy" width="156" height="49" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png" />
                </div>
            </div>

            {/* Company */}
            <div>
                <h3 className="font-bold mb-2">কোম্পানি</h3>
                <ul className="space-y-1">
                    <li>ক্যারিয়ার / নিয়োগ</li>
                    <li>বিজ্ঞপ্তি</li>
                    <li>শিক্ষক হিসেবে যোগ দিন</li>
                    <li>অ্যাফিলিয়েট হিসেবে যোগ দিন</li>
                    <li>প্রাইভেসি পলিসি</li>
                    <li>রিফান্ড পলিসি</li>
                    <li>ব্যবহারকারীর শর্তাবলি</li>
                </ul>
            </div>

            {/* Others */}
            <div>
                <h3 className="font-bold mb-2">অন্যান্য</h3>
                <ul className="space-y-1">
                    <li>ব্লগ</li>
                    <li>বুক স্টোর</li>
                    <li>ফ্রি নোটস ও গাইড</li>
                    <li>চাকরির প্রস্তুতি কোর্সসমূহ</li>
                    <li>সার্টিফিকেট ভেরিফাই করুন</li>
                    <li>ফ্রি ডাউনলোড</li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 className="font-bold mb-2">আমাদের যোগাযোগ মাধ্যম</h3>
                <p>কল করুন: <span className="text-green-600">16910</span> (24x7)</p>
                <p>হোয়াটসঅ্যাপ: <span className="text-green-600">+8801896016252</span> (24x7)</p>
                <p>দেশের বাইরে থেকে: <span className="text-green-600">+8809610916910</span></p>
                <p>ইমেইল: <span className="text-green-600">support@10minuteschool.com</span></p>

                <div className="flex gap-4 mt-4 text-xl">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
