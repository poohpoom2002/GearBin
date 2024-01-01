import React, { useState } from "react";
import ButtonCoupon from "./ButtonCoupon";
import ButtonCash from "./ButtonCash";
import ButtonPromptpay from "./ButtonPromptpay.";
import { Link } from 'react-router-dom';

// import {useForm} from 'react-hook-form';
// import axios from 'axios';


// interface FormData{
//     id:number
//     data:[];
//     username:string;
//     password:string;
// };

//http://10.66.11.55:3000/admin/user/login
function page({name,price,pic}){


    // const handleSubmit=(e)=>{e.preventDefault();
    //     axios({
    //         method:'post',
    //         url:'http://10.66.11.55:3000/admin/user/login',
    //         data:{
    //             username: username,
    //             password: password

    //         },
    //         headers:{
    //             Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOGUwNzNlYzktNGEwOS00NjI0LWJmOGQtMmRjMzE2MDZmZWEwIiwiaWF0IjoxNjk1ODkzMzY1fQ.vt1a_XFIEr8nZYjQwgEp0X9GG0Ni3jzf4XJVzG3kAtc'
    //         },
    //     }).then((res)=>{
    //         console.log()
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // };
    // const[username,setUsername]=useState("");
    // const[password,setPassword]=useState("")
    return(
        <div className="w-full h-full bg-white">
            <div className="bg-bg-green w-full h-1/6 flex items-center justify-between px-9">
             <Link to="/fooddetail"> 
            <svg className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                d="M44.47 56.2562L24.0533 35.8395L44.47 15.4229"
                stroke="#F7F2EC"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </Link>  
            <h1 className="text-white text-5xl font-bold flex-grow text-end mr-10 ">เลือกวิธีชำระเงิน</h1> 
            <div className="flex items-end gap-x-9 h-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="39"
                viewBox="0 0 81 39"
                fill="none"
              >
                <path
                  d="M42.1349 16.429C42.2427 15.5026 43.0451 14.6864 44.3059 14.2618C42.991 12.3919 43.66 10.7161 45.1069 10.3322C46.1169 10.0603 47.4776 10.4165 48.7283 11.4436C48.7617 11.4723 48.7904 11.4985 48.819 11.5224C48.8334 11.4866 48.8453 11.446 48.8597 11.4078C49.4188 9.86089 50.4171 8.85367 51.4414 8.58422C52.9027 8.19076 54.3133 9.35395 54.0905 11.6578C55.3846 11.41 56.497 11.7088 57.0769 12.4443L60.0543 11.6526C57.9105 4.14315 53.523 2.08843 48.7406 3.3618L44.5836 4.47063C39.7581 5.75831 37.1354 9.72552 39.265 17.192L42.1325 16.4266L42.1349 16.429Z"
                  fill="#FF1E0D"
                />
                <path
                  d="M39.2697 17.1943C37.1354 9.72543 39.7605 5.75822 44.586 4.47054L48.7453 3.3617C53.5254 2.08595 57.9176 4.14545 60.0591 11.6526L61.1121 11.3712C60.0223 7.55315 58.3018 4.8499 56.0056 3.33545C53.8764 1.93565 51.2647 1.58621 48.4544 2.33736L44.2951 3.44619C41.4705 4.19733 39.4096 5.7963 38.3273 8.0641C37.1686 10.5014 37.1294 13.6649 38.2168 17.4709L39.2721 17.1919L39.2697 17.1943Z"
                  fill="#A80202"
                />
                <path
                  d="M46.1728 7.34125C45.8508 6.21184 46.3309 5.58647 47.0854 5.38855C47.8375 5.18586 48.5799 5.48455 48.9043 6.61396C49.2262 7.74336 48.2515 9.47878 48.2515 9.47878C48.2515 9.47878 46.4947 8.47305 46.1728 7.34125Z"
                  fill="white"
                />
                <path
                  d="M40.9005 9.69024C40.1964 9.03583 40.2634 8.40554 40.6981 7.96638C41.1352 7.52483 41.7774 7.43193 42.4815 8.08873C43.1856 8.74315 43.2519 10.338 43.2519 10.338C43.2519 10.338 41.6069 10.3447 40.9005 9.69024Z"
                  fill="white"
                />
                <path
                  d="M54.4004 6.09476C54.6562 5.18281 54.2672 4.67652 53.6585 4.51158C53.0497 4.34903 52.4504 4.58759 52.1922 5.50193C51.9341 6.41388 52.7263 7.81562 52.7263 7.81562C52.7263 7.81562 54.1423 7.00433 54.4004 6.09238L54.4004 6.09476Z"
                  fill="white"
                />
                <path
                  d="M62.7131 36.6637C62.1735 36.5107 47.2049 34.3164 41.9994 36.9529C42.1643 36.4755 42.0237 35.6541 41.6038 34.8303L79.5202 16.3514L79.5274 16.3657C81.0568 19.162 80.2821 22.8194 77.4403 24.9291C80.9013 27.3822 80.3533 31.5793 76.4468 33.488C73.0107 35.163 70.3968 33.8537 69.3558 34.0348C68.9563 36.6705 65.8427 37.5386 62.7131 36.6613L62.7131 36.6637Z"
                  fill="#698E19"
                />
                <path
                  d="M79.5321 16.363C79.5321 16.363 79.5274 16.363 79.525 16.3677L41.5942 34.818C41.1695 33.999 40.5872 33.3971 40.0906 33.2251C45.3773 30.7366 52.5129 17.8033 52.7088 17.2901C53.8558 14.3275 56.4372 12.4255 58.8529 13.6917C59.6195 12.9876 60.1003 10.1776 63.5436 8.50274C67.4548 6.60116 71.2454 8.6915 71.2035 12.8482C74.6489 11.8991 78.1364 13.4879 79.5297 16.363L79.5321 16.363Z"
                  fill="#AAC605"
                />
                <path
                  d="M18.5305 37.2245C19.0702 37.0648 34.0069 34.675 39.2465 37.2457C39.0747 36.7705 39.2039 35.9492 39.6149 35.1185L1.46207 17.135L1.45729 17.1493C-0.035802 19.9661 0.786691 23.6122 3.65573 25.6855C0.226521 28.1841 0.82917 32.3744 4.7607 34.2308C8.21958 35.8626 10.8152 34.5193 11.8561 34.6868C12.2897 37.318 15.4146 38.1451 18.5305 37.2269L18.5305 37.2245Z"
                  fill="#698E19"
                />
                <path
                  d="M1.4478 17.1438C1.4478 17.1438 1.45256 17.1438 1.45494 17.1462L39.6221 35.1034C40.0354 34.2775 40.6109 33.6688 41.1028 33.4899C35.7844 31.0696 28.4806 18.2294 28.2778 17.7208C27.0922 14.7718 24.4881 12.9039 22.0883 14.202C21.315 13.5093 20.7955 10.7038 17.3318 9.07197C13.3955 7.22034 9.63216 9.36071 9.72868 13.5174C6.27194 12.6138 2.80483 14.2457 1.4478 17.1414L1.4478 17.1438Z"
                  fill="#AAC605"
                />
                <path
                  d="M47.8858 11.0599C47.884 16.6944 43.1768 21.2626 37.3753 21.2607C31.5714 21.2588 26.8672 16.6899 26.8691 11.0529C26.8709 5.41836 31.5781 0.850183 37.382 0.852094C43.1859 0.854006 47.8877 5.4229 47.8882 11.0575L47.8858 11.0599Z"
                  fill="#F0A8A9"
                />
                <path
                  d="M39.8405 9.46129L39.841 8.13144C39.8411 7.60857 39.4068 7.18583 38.8696 7.18566C38.3324 7.18548 37.8954 7.60793 37.8952 8.1308C37.8951 8.49132 37.9546 8.91154 37.5319 9.23849L35.9343 10.489C35.5164 10.816 35.4494 11.4081 35.7858 11.8164L37.676 14.0972C38.0125 14.5032 38.626 14.5678 39.0439 14.2409L41.0069 12.7087C41.4248 12.3794 41.4919 11.7849 41.1554 11.3789C40.0099 9.99616 39.8404 9.90537 39.8405 9.46129Z"
                  fill="#EC9797"
                />
                <path
                  d="M35.5996 4.71477L36.3661 4.19215C36.667 3.98454 36.7388 3.58345 36.5264 3.2921C36.3164 3.00076 35.901 2.93138 35.6001 3.13661C35.3923 3.27741 35.175 3.4755 34.8193 3.37749L33.4705 3.00221C33.1172 2.9042 32.7495 3.09986 32.6467 3.44602L32.0779 5.37018C31.9775 5.71156 32.1827 6.06976 32.536 6.17015L34.1904 6.6291C34.5437 6.72711 34.9114 6.52907 35.0142 6.18768C35.3583 5.02029 35.344 4.89375 35.5996 4.71716L35.5996 4.71477Z"
                  fill="#EC9797"
                />
                <path
                  d="M32.8147 8.37822L29.8423 8.37724C29.3648 8.37708 28.9779 8.75418 28.9778 9.21737L28.9765 13.1114C28.9763 13.5746 29.363 13.952 29.8404 13.9521L30.4636 13.9523C30.9411 13.9525 31.328 13.5778 31.3281 13.1122C31.3283 12.649 31.7152 12.2743 32.1927 12.2745C32.5078 12.2746 33.68 12.4301 33.6803 11.4369L33.6811 9.22369C33.6812 8.76051 33.2946 8.38315 32.8171 8.38299L32.8147 8.37822Z"
                  fill="#FACFCF"
                />
                <path
                  d="M34.9773 16.8214L34.9765 19.1134C34.9764 19.4811 35.2843 19.7796 35.6615 19.7798L38.8464 19.7808C39.226 19.7809 39.5341 19.4826 39.5318 19.1149L39.532 18.635C39.5321 18.2674 39.2242 17.9688 38.847 17.9687C38.4674 17.9686 38.1595 17.67 38.1596 17.3023C38.1597 17.0612 38.2865 16.1564 37.4748 16.1561L35.6627 16.1555C35.2831 16.1554 34.975 16.4537 34.9749 16.8238L34.9773 16.8214Z"
                  fill="#FACFCF"
                />
                <path
                  d="M43.1703 4.81405C43.1701 5.26052 42.7975 5.62091 42.3392 5.62076L39.023 5.61967C38.567 5.61952 38.1947 5.25888 38.1948 4.81241C38.1949 4.36833 38.5675 4.00794 39.0259 4.00809L42.3397 4.00918C42.7981 4.00933 43.1704 4.36997 43.1703 4.81405Z"
                  fill="#FACFCF"
                />
                <path
                  d="M45.8281 10.1226C45.8277 11.0847 45.0253 11.8628 44.0345 11.8625C43.0437 11.8622 42.2418 11.0836 42.2421 10.1214C42.2424 9.1592 43.0449 8.37874 44.0357 8.38146C45.0265 8.38178 45.8284 9.16038 45.8281 10.1226Z"
                  fill="#FACFCF"
                />
                <path
                  d="M43.1663 16.831C43.1662 17.3133 42.7625 17.7047 42.266 17.7046C41.7694 17.7044 41.366 17.3127 41.3662 16.8328C41.3663 16.3505 41.7675 15.9591 42.2641 15.9593C42.7607 15.9594 43.1641 16.3487 43.1639 16.831L43.1663 16.831Z"
                  fill="#FACFCF"
                />
                <path
                  d="M33.5735 16.8186C33.5733 17.2961 33.1745 17.6779 32.685 17.6778C32.1956 17.6776 31.797 17.2931 31.7972 16.818C31.7974 16.3405 32.1962 15.9538 32.6856 15.9564C33.175 15.9565 33.5736 16.3434 33.5735 16.8186Z"
                  fill="#FACFCF"
                />
                <path
                  d="M36.7637 7.78283C36.7636 8.11231 36.4889 8.37963 36.1499 8.37951C35.8109 8.3794 35.5364 8.11191 35.5365 7.78243C35.5367 7.45295 35.8113 7.18564 36.1503 7.18575C36.4893 7.18586 36.7638 7.45335 36.7637 7.78283Z"
                  fill="#FACFCF"
                />
                <path
                  d="M16.8547 29.9583C16.2103 29.2848 16.0961 28.1459 16.574 26.9045C14.2964 26.7223 13.4326 25.1367 14.061 23.7784C14.4982 22.8259 15.6397 22.0098 17.2298 21.6999C17.2728 21.6928 17.311 21.6856 17.3492 21.6809C17.3301 21.645 17.3063 21.6116 17.2872 21.5758C16.4544 20.1573 16.3164 18.7462 16.7632 17.7866C17.3939 16.4116 19.1894 16.0684 20.8195 17.7115C21.4549 16.5562 22.3958 15.8928 23.3317 15.9146L24.6242 13.1168C17.4772 9.97007 13.0932 12.0338 11.0194 16.5289L9.21794 20.4343C7.12742 24.9699 8.50349 29.521 15.6099 32.651L16.8523 29.9559L16.8547 29.9583Z"
                  fill="#FF1E0D"
                />
                <path
                  d="M15.6171 32.6515C8.50825 29.5239 7.12978 24.9728 9.2203 20.4372L11.0217 16.5294C13.0931 12.0367 17.482 9.97059 24.6266 13.1173L25.0829 12.1266C21.4497 10.5282 18.2698 10.1237 15.6385 10.925C13.2007 11.6691 11.2639 13.4567 10.0478 16.0969L8.24398 20.0071C7.02073 22.6593 6.93391 25.2688 7.98841 27.5492C9.12403 29.9968 11.5347 32.0485 15.1559 33.6422L15.6171 32.6515Z"
                  fill="#A80202"
                />
                <path
                  d="M12.4408 21.0495C11.3666 20.5764 11.1902 19.8075 11.5199 19.1009C11.8448 18.3919 12.5492 18.0126 13.6234 18.4857C14.6976 18.9587 15.4109 20.8165 15.4109 20.8165C15.4109 20.8165 13.515 21.5249 12.4408 21.0519L12.4408 21.0495Z"
                  fill="white"
                />
                <path
                  d="M10.8847 26.6045C9.92968 26.7283 9.48816 26.2746 9.42868 25.6586C9.36681 25.0402 9.70601 24.4888 10.661 24.3649C11.6137 24.2411 12.8859 25.2085 12.8859 25.2085C12.8859 25.2085 11.8397 26.4783 10.8847 26.6045Z"
                  fill="white"
                />
                <path
                  d="M16.7357 13.9209C16.1964 13.14 15.5589 13.1184 15.0455 13.4811C14.5321 13.8462 14.3313 14.4597 14.8706 15.2406C15.4076 16.0192 16.9927 16.3086 16.9927 16.3086C16.9927 16.3086 17.2726 14.7018 16.7381 13.9209L16.7357 13.9209Z"
                  fill="white"
                />
                <path
                  d="M31.0444 11.9373C31.0429 16.4545 27.2719 20.111 22.6211 20.1094C17.9703 20.1079 14.1994 16.4466 14.2032 11.9317C14.2047 7.41453 17.9757 3.75808 22.6265 3.75961C27.2773 3.76114 31.0458 7.42247 31.0444 11.9373Z"
                  fill="#5B7514"
                />
                <path
                  d="M29.5307 11.9357C29.5294 15.6388 26.4367 18.6413 22.6215 18.64C18.8064 18.6388 15.7132 15.6342 15.7145 11.9312C15.7157 8.22812 18.8084 5.22563 22.626 5.22689C26.4411 5.22814 29.5319 8.23267 29.5307 11.9357Z"
                  fill="#A2C733"
                />
                <path
                  d="M25.4004 11.9353C25.3999 13.4203 24.1581 14.6233 22.6301 14.6228C21.1021 14.6222 19.8611 13.4185 19.8615 11.9335C19.862 10.4484 21.1015 9.24553 22.6295 9.24603C24.1574 9.24653 25.3985 10.4503 25.398 11.9353L25.4004 11.9353Z"
                  fill="white"
                />
                <path
                  d="M40.2526 5.4774L40.2417 38.3776L8.56734 38.3671C4.93125 38.3659 2.44953 34.6573 3.86639 31.3081C9.43588 18.1427 23.4544 5.46947 40.2549 5.47501L40.2526 5.4774Z"
                  fill="#FFDD4D"
                />
                <path
                  d="M40.2511 9.96332L40.2417 38.3773L11.4729 38.3679C7.44524 38.3665 4.99476 33.9703 7.07059 30.5186C13.9502 19.0822 26.2367 9.95632 40.2511 9.96332Z"
                  fill="#FFB636"
                />
                <path
                  d="M40.2525 5.477L40.2417 38.3772L71.916 38.3876C75.5521 38.3888 78.0363 34.6818 76.6216 31.3316C71.0608 18.1626 57.0506 5.48014 40.2501 5.47461L40.2525 5.477Z"
                  fill="#FCD329"
                />
                <path
                  d="M40.251 9.96387L40.2417 38.3779L69.0105 38.3874C73.0381 38.3887 75.4915 33.994 73.4156 30.541C66.5435 19.1001 54.263 9.9661 40.2487 9.96387L40.251 9.96387Z"
                  fill="#FFAF10"
                />
                <path
                  d="M38.9242 22.4978C38.9239 23.3525 38.2289 24.0471 37.3742 24.0468C36.5195 24.0465 35.825 23.3515 35.8253 22.4968C35.8256 21.642 36.5206 20.9475 37.3753 20.9478C38.23 20.9481 38.9245 21.6431 38.9242 22.4978Z"
                  fill="#FF8812"
                />
                <path
                  d="M27.312 28.6648C27.3117 29.5195 26.6168 30.2141 25.7621 30.2138C24.9073 30.2135 24.2128 29.5185 24.2131 28.6638C24.2134 27.809 24.9084 27.1145 25.7631 27.1148C26.6178 27.115 27.3123 27.8101 27.312 28.6648Z"
                  fill="#FF8812"
                />
                <path
                  d="M26.8303 19.879C26.8301 20.4663 26.3525 20.9437 25.7651 20.9435C25.1778 20.9433 24.7005 20.4656 24.7007 19.8783C24.7009 19.291 25.1785 18.8136 25.7658 18.8138C26.3532 18.814 26.8305 19.2917 26.8303 19.879Z"
                  fill="#FF8812"
                />
                <path
                  d="M17.1421 34.1485C17.1419 34.7359 16.6642 35.2132 16.0769 35.213C15.4896 35.2128 15.0123 34.7352 15.0125 34.1478C15.0127 33.5605 15.4903 33.0832 16.0776 33.0834C16.6649 33.0836 17.1423 33.5612 17.1421 34.1485Z"
                  fill="#FF8812"
                />
                <path
                  d="M42.7129 30.5349C42.7126 31.392 43.4071 32.0846 44.2618 32.0849C45.1165 32.0852 45.8115 31.3906 45.8118 30.5359C45.8121 29.6811 45.1175 28.9861 44.2628 28.9859C43.4081 28.9856 42.7132 29.6801 42.7129 30.5349Z"
                  fill="#FF8812"
                />
                <path
                  d="M46.2578 17.2331C46.2575 18.0878 46.952 18.7828 47.8067 18.7831C48.6614 18.7834 49.3564 18.0889 49.3567 17.2341C49.357 16.3794 48.6625 15.6844 47.8078 15.6841C46.953 15.6838 46.2581 16.3784 46.2578 17.2331Z"
                  fill="#FF8812"
                />
                <path
                  d="M53.5269 19.8881C53.5267 20.4754 54.004 20.9531 54.5913 20.9533C55.1786 20.9535 55.6563 20.4761 55.6565 19.8888C55.6567 19.3014 55.1793 18.8238 54.592 18.8236C54.0047 18.8234 53.5271 19.3007 53.5269 19.8881Z"
                  fill="#FF8812"
                />
                <path
                  d="M63.2057 34.1644C63.2055 34.7518 63.6828 35.2294 64.2701 35.2296C64.8575 35.2298 65.3351 34.7525 65.3353 34.1651C65.3355 33.5778 64.8582 33.1002 64.2709 33.1C63.6835 33.0998 63.2059 33.5771 63.2057 34.1644Z"
                  fill="#FF8812"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="61"
                viewBox="0 0 88 61"
                fill="none"
                className="translate-y-3"
              >
                <path
                  d="M38.1174 0.839844C40.3015 9.18398 40.9979 17.3047 40.967 24.3916C40.9979 31.4762 40.3015 39.5993 38.1174 47.9434H62.0712V0.842223H38.1174V0.839844Z"
                  fill="#536D0C"
                />
                <path
                  d="M86.0226 0.839844C83.8385 9.18398 83.1421 17.3047 83.173 24.3916C83.1421 31.4762 83.8385 39.5993 86.0226 47.9434H62.0712V0.842223H86.0226V0.839844Z"
                  fill="#404F07"
                />
                <path
                  d="M44.6056 0.839844C44.6056 0.839844 50.0884 22.5973 57.5533 30.5779H62.0713V0.839844H44.6056Z"
                  fill="#939612"
                />
                <path
                  d="M79.5345 0.839844C79.5345 0.839844 74.0517 22.5973 66.5868 30.5779H62.0688V0.839844H79.5345Z"
                  fill="#7F7F0D"
                />
                <path
                  d="M84.4826 12.6468C84.4826 13.027 84.176 13.3336 83.7958 13.3336H40.3443C39.9641 13.3336 39.6575 13.027 39.6575 12.6468C39.6575 12.2689 39.9641 11.96 40.3443 11.96H83.7958C84.176 11.96 84.4826 12.2665 84.4826 12.6468Z"
                  fill="#D6C4B0"
                />
                <path
                  d="M84.4826 24.3909C84.4826 24.7712 84.176 25.0778 83.7958 25.0778H40.3443C39.9641 25.0778 39.6575 24.7712 39.6575 24.3909C39.6575 24.0107 39.9641 23.7041 40.3443 23.7041H83.7958C84.176 23.7041 84.4826 24.0107 84.4826 24.3909Z"
                  fill="#D6C4B0"
                />
                <path
                  d="M84.4826 36.139C84.4826 36.5169 84.176 36.8258 83.7958 36.8258H40.3443C39.9641 36.8258 39.6575 36.5192 39.6575 36.139C39.6575 35.7587 39.9641 35.4521 40.3443 35.4521H83.7958C84.176 35.4521 84.4826 35.7587 84.4826 36.139Z"
                  fill="#D6C4B0"
                />
                <path
                  d="M82.0253 24.9549L82.3913 23.8379C83.9908 24.3631 86.6455 26.0053 87.261 27.8685L86.144 28.2369C85.6995 26.8942 83.4442 25.4207 82.0229 24.9549H82.0253Z"
                  fill="#D8C6B4"
                />
                <path
                  d="M77.1556 20.9245L78.2726 20.5537C78.7171 21.8965 80.9725 23.3699 82.3937 23.8358L82.0277 24.9527C80.4282 24.4275 77.7736 22.7829 77.158 20.9221L77.1556 20.9245Z"
                  fill="#D8C6B4"
                />
                <path
                  d="M84.1238 30.0663C85.122 28.4431 83.6818 25.9762 82.8714 24.3958C83.6842 22.8106 85.122 20.3461 84.1238 18.7229C83.2207 17.2566 81.0818 17.4443 80.2927 18.7229C79.2946 20.3485 80.73 22.8059 81.5476 24.3958C80.8132 25.8217 79.2756 28.4122 80.2927 30.0663C81.1246 31.4209 83.2801 31.4376 84.1238 30.0663ZM81.2933 19.3456C81.6617 18.7324 82.7383 18.7134 83.1209 19.3385C83.6937 20.2701 82.667 22.2117 82.2083 23.1053C81.8566 22.4209 80.7039 20.3224 81.2909 19.3456H81.2933ZM81.2981 29.4508C80.7253 28.5192 81.7544 26.5751 82.2107 25.6839C82.5577 26.3636 83.7151 28.4692 83.128 29.4436C82.6147 30.2968 81.5595 29.8738 81.2981 29.4508Z"
                  fill="#D8C6B4"
                />
                <path
                  d="M37.8798 18.0914C37.1858 14.0798 33.0576 11.6462 29.1957 12.9343L4.87824 21.0479C1.01626 22.336 -0.82325 26.7612 1.0305 30.3854C4.73801 37.634 7.80621 46.6459 9.26069 55.0495C9.95466 59.0611 14.0828 61.4947 17.9448 60.2066L42.2623 52.093C46.1242 50.8049 47.9637 46.3797 46.11 42.7555C42.3858 35.476 39.3271 26.457 37.8798 18.0891V18.0914Z"
                  fill="#F9B95A"
                />
                <path
                  d="M14.311 44.844C14.0472 46.8403 13.1513 48.3685 12.3076 48.2568C11.4663 48.1451 10.9957 46.4363 11.2595 44.44C11.5233 42.4437 12.4193 40.9155 13.263 41.0272C14.1043 41.1389 14.5748 42.8477 14.3087 44.844H14.311Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M22.2417 50.0108C24.2167 50.4101 25.6783 51.4082 25.5119 52.24C25.3432 53.0718 23.6059 53.4236 21.6333 53.0243C19.6583 52.625 18.1944 51.6269 18.3631 50.7927C18.5318 49.9609 20.2691 49.6092 22.2417 50.0084V50.0108Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M26.194 41.0278C25.279 42.8221 23.9243 43.9652 23.1686 43.5779C22.4104 43.1928 22.5388 41.4247 23.4538 39.6304C24.3688 37.8361 25.7234 36.6929 26.4816 37.0803C27.2373 37.4653 27.1114 39.2335 26.1964 41.0278H26.194Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M19.0523 30.6275C20.8752 31.4831 22.0611 32.7997 21.6998 33.5697C21.3386 34.3397 19.568 34.2684 17.7452 33.4129C15.9223 32.5573 14.7364 31.2407 15.0976 30.4707C15.4589 29.7007 17.2294 29.772 19.0523 30.6275Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M31.5746 16.9859C33.3975 17.8415 34.5834 19.1581 34.2222 19.9281C33.8609 20.6981 32.0904 20.6268 30.2675 19.7713C28.4446 18.9157 27.2587 17.5991 27.62 16.8291C27.9812 16.0591 29.7518 16.1304 31.5746 16.9859Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M32.3067 32.4049C34.1296 33.2604 35.3155 34.5771 34.9542 35.3471C34.593 36.1171 32.8224 36.0458 30.9996 35.1902C29.1767 34.3346 27.9908 33.018 28.352 32.248C28.7133 31.478 30.4838 31.5493 32.3067 32.4049Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M36.9695 42.6363C38.4786 41.3006 40.1565 40.735 40.7197 41.3696C41.283 42.0065 40.5177 43.6035 39.0086 44.9392C37.4995 46.2748 35.8216 46.8404 35.2583 46.2035C34.6951 45.5666 35.4627 43.9695 36.9695 42.6339V42.6363Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M13.4459 35.4824C13.693 36.2215 13.2938 37.0224 12.5523 37.2695C11.8131 37.5167 11.0122 37.1175 10.7651 36.376C10.5179 35.6369 10.9172 34.8359 11.6587 34.5888C12.3978 34.3416 13.1987 34.7409 13.4459 35.4824Z"
                  fill="#B25918"
                />
                <path
                  d="M11.3284 27.4694C10.5536 29.3279 9.28927 30.5709 8.50499 30.2429C7.72071 29.9149 7.71357 28.1444 8.48834 26.2859C9.26549 24.4274 10.5275 23.1845 11.3117 23.5125C12.096 23.8404 12.1032 25.611 11.326 27.4718L11.3284 27.4694Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M22.4057 19.7285C22.6529 20.4676 22.2536 21.2685 21.5121 21.5157C20.773 21.7628 19.9721 21.3636 19.7249 20.6221C19.4777 19.883 19.877 19.0821 20.6185 18.8349C21.3576 18.5877 22.1585 18.987 22.4057 19.7261V19.7285Z"
                  fill="#B25918"
                />
                <path
                  d="M21.0582 44.5214C21.3053 45.2606 20.906 46.0615 20.1645 46.3086C19.4254 46.5558 18.6245 46.1565 18.3774 45.415C18.1302 44.6759 18.5294 43.875 19.2709 43.6278C20.0101 43.3807 20.811 43.78 21.0582 44.5214Z"
                  fill="#B25918"
                />
                <path
                  d="M14.0875 53.25C14.3347 53.9891 13.9354 54.79 13.1963 55.0371C12.4548 55.2843 11.6563 54.885 11.4091 54.1435C11.1619 53.4044 11.5612 52.6035 12.3027 52.3564C13.0442 52.1092 13.8428 52.5085 14.0899 53.25H14.0875Z"
                  fill="#B25918"
                />
                <path
                  d="M31.3465 48.9794C31.5937 49.7186 31.1944 50.5195 30.4529 50.7666C29.7138 51.0138 28.9129 50.6145 28.6657 49.873C28.4185 49.1339 28.8178 48.333 29.5593 48.0859C30.2984 47.8387 31.0993 48.238 31.3465 48.9794Z"
                  fill="#B25918"
                />
                <path
                  d="M30.9162 24.4443C31.1634 25.1834 30.7641 25.9843 30.025 26.2315C29.2859 26.4786 28.485 26.0794 28.2378 25.3379C27.9907 24.5988 28.3899 23.7979 29.1314 23.5507C29.8706 23.3035 30.6715 23.7028 30.9186 24.4443H30.9162Z"
                  fill="#B25918"
                />
                <path
                  d="M34.619 39.996C34.8662 40.7352 34.4669 41.5361 33.7278 41.7832C32.9887 42.0304 32.1878 41.6311 31.9406 40.8896C31.6934 40.1482 32.0927 39.3496 32.8342 39.1025C33.5733 38.8553 34.3742 39.2546 34.6214 39.996H34.619Z"
                  fill="#B25918"
                />
                <path
                  d="M44.615 43.9531C44.8622 44.6922 44.4629 45.4931 43.7214 45.7403C42.9823 45.9874 42.1814 45.5881 41.9342 44.8467C41.6871 44.1075 42.0863 43.3067 42.8278 43.0595C43.5693 42.8123 44.3679 43.2116 44.615 43.9531Z"
                  fill="#B25918"
                />
                <path
                  d="M63.0338 30.5771H61.104V34.1539H63.0338V30.5771Z"
                  fill="#F9B95A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="110"
                viewBox="0 0 82 110"
                fill="none"
              >
                <path
                  d="M23.9488 41.9304C24.4691 39.1546 31.7109 38.1631 20.5236 28.0398C12.2962 20.5893 16.6621 4.20994 24.759 0.839844C20.5236 11.2299 20.496 21.6576 25.5447 26.2206C36.387 36.0294 28.2132 42.2362 23.9488 41.9304Z"
                  fill="#A7DAD9"
                />
                <path
                  d="M41.4138 41.9304C41.9386 39.1546 49.1745 38.1631 37.9872 28.0398C29.7613 20.5893 34.1315 4.20994 42.2299 0.839844C37.9872 11.2299 37.9669 21.6576 43.0112 26.2206C53.8535 36.0294 45.6754 42.2362 41.4124 41.9304H41.4138Z"
                  fill="#A7DAD9"
                />
                <path
                  d="M58.8775 41.9304C59.4051 39.1546 66.6396 38.1631 55.4538 28.0398C47.2278 20.5893 51.5981 4.20994 59.6965 0.839844C55.4538 11.2299 55.4335 21.6576 60.4807 26.2206C71.3215 36.0294 63.1463 42.2362 58.876 41.9304H58.8775Z"
                  fill="#A7DAD9"
                />
                <path
                  d="M81.7217 73.4325C81.7217 75.1951 80.2925 76.6243 78.527 76.6243H3.45424C1.6902 76.6243 0.260986 75.1951 0.260986 73.4325C0.260986 71.6714 1.6902 70.2422 3.45424 70.2422H78.5284C80.2925 70.2422 81.7231 71.6714 81.7231 73.4325H81.7217Z"
                  fill="#D0ECF2"
                />
                <path
                  d="M34.9491 84.5V106.64H17.6072C12.2702 100.894 8.32606 93.2376 6.50403 84.5H34.9491Z"
                  fill="#D0ECF2"
                />
                <path
                  d="M34.9491 106.643V109.84H17.4261C16.5491 109.84 15.849 109.118 15.849 108.241C15.849 107.364 16.5491 106.643 17.4261 106.643H34.9491Z"
                  fill="#D0ECF2"
                />
                <path
                  d="M34.9491 76.6162V84.5015H6.50404C5.94164 81.9562 5.58071 79.3195 5.42126 76.6162H34.9491Z"
                  fill="#A7DAD9"
                />
                <path
                  d="M76.5702 76.6162C76.3919 79.3181 76.0324 81.9547 75.4903 84.5015H34.9491V76.6162H76.5702Z"
                  fill="#71A1A2"
                />
                <path
                  d="M75.4903 84.5C73.6422 93.2391 69.7024 100.919 64.3871 106.64H34.9491V84.5H75.4903Z"
                  fill="#A7DAD9"
                />
                <path
                  d="M66.1424 108.239C66.1424 109.116 65.4235 109.838 64.5436 109.838H34.9491V106.641H64.5436C65.4235 106.641 66.1424 107.36 66.1424 108.239Z"
                  fill="#71A1A2"
                />
                <path
                  d="M75.054 70.2424H6.89246C6.89246 59.3132 18.7059 53.6398 26.0216 61.0279C28.7597 55.9053 33.817 52.4512 39.6121 52.4512C46.1277 52.4512 51.7053 56.7838 54.1449 62.9616C56.1829 59.5552 59.682 57.2897 63.6783 57.2897C69.44 57.2897 75.054 62.1092 75.054 70.2409V70.2424Z"
                  fill="#FAA824"
                />
                <path
                  d="M20.7106 65.9936C20.7106 66.8633 20.0061 67.5664 19.1379 67.5664C18.2696 67.5664 17.5652 66.8619 17.5652 65.9936C17.5652 65.1254 18.2696 64.4209 19.1379 64.4209C20.0061 64.4209 20.7106 65.1254 20.7106 65.9936Z"
                  fill="#EF5323"
                />
                <path
                  d="M27.3855 65.9936C27.3855 66.8633 26.6811 67.5664 25.8128 67.5664C24.9446 67.5664 24.2401 66.8619 24.2401 65.9936C24.2401 65.1254 24.9446 64.4209 25.8128 64.4209C26.6811 64.4209 27.3855 65.1254 27.3855 65.9936Z"
                  fill="#EF5323"
                />
                <path
                  d="M34.0591 65.9936C34.0591 66.8633 33.3547 67.5664 32.4864 67.5664C31.6182 67.5664 30.9137 66.8619 30.9137 65.9936C30.9137 65.1254 31.6182 64.4209 32.4864 64.4209C33.3547 64.4209 34.0591 65.1254 34.0591 65.9936Z"
                  fill="#EF5323"
                />
                <path
                  d="M40.734 65.9936C40.734 66.8633 40.0296 67.5664 39.1613 67.5664C38.2931 67.5664 37.5886 66.8619 37.5886 65.9936C37.5886 65.1254 38.2931 64.4209 39.1613 64.4209C40.0296 64.4209 40.734 65.1254 40.734 65.9936Z"
                  fill="#EF5323"
                />
                <path
                  d="M47.4075 65.9936C47.4075 66.8633 46.7031 67.5664 45.8348 67.5664C44.9665 67.5664 44.2621 66.8619 44.2621 65.9936C44.2621 65.1254 44.9665 64.4209 45.8348 64.4209C46.7031 64.4209 47.4075 65.1254 47.4075 65.9936Z"
                  fill="#EF5323"
                />
                <path
                  d="M37.2045 60.6352C37.2045 61.5049 36.5 62.2079 35.6318 62.2079C34.7635 62.2079 34.0591 61.5034 34.0591 60.6352C34.0591 59.7669 34.7635 59.0625 35.6318 59.0625C36.5 59.0625 37.2045 59.7669 37.2045 60.6352Z"
                  fill="#EF5323"
                />
                <path
                  d="M43.8794 60.6352C43.8794 61.5049 43.175 62.2079 42.3067 62.2079C41.4385 62.2079 40.734 61.5034 40.734 60.6352C40.734 59.7669 41.4385 59.0625 42.3067 59.0625C43.175 59.0625 43.8794 59.7669 43.8794 60.6352Z"
                  fill="#EF5323"
                />
                <path
                  d="M54.0811 65.9936C54.0811 66.8633 53.3767 67.5664 52.5084 67.5664C51.6401 67.5664 50.9371 66.8619 50.9371 65.9936C50.9371 65.1254 51.6416 64.4209 52.5084 64.4209C53.3752 64.4209 54.0811 65.1254 54.0811 65.9936Z"
                  fill="#EF5323"
                />
                <path
                  d="M60.756 65.9936C60.756 66.8633 60.0516 67.5664 59.1833 67.5664C58.3151 67.5664 57.6106 66.8619 57.6106 65.9936C57.6106 65.1254 58.3151 64.4209 59.1833 64.4209C60.0516 64.4209 60.756 65.1254 60.756 65.9936Z"
                  fill="#EF5323"
                />
              </svg>
              
            </div>
            
          </div>
            <div class="w-full mt-4 flex-col flex justify-center items-center ">
                <img class="w-1/4 h-1/4 mt-0 rounded-[20px]" src={pic} alt="image"/>
                <p className="text-center text-2xl flex-grow text-center mt-7">{name}</p>
                <h1 className="text-bg-green text-center text-5xl flex-grow text-center mt-1">฿{price}</h1>
            </div>
            <div className="w-full h-[150px]  flex mt-14 ">
                <ButtonCash/>
                <ButtonPromptpay/>
                <ButtonCoupon/>
            </div>
            <div className="flex justify-center mt-4">
            <Link
                to="/mainmenu"
                className="bg-[#F7F2EC] text-4xl py-1 font-normal w-1/3  rounded-full text-gray-text hover:bg-bg-brown hover:text-white focus:bg-bg-brown focus:text-white border-2 border-bg-brown text-center "
              >
                <p className="m-1">ยกเลิก</p>
              </Link>
            </div>

    </div>
    )
}
export default page;